    /* eslint-disable react/prop-types */
    import { Html5QrcodeScanner } from "html5-qrcode";
    import  { useEffect, useRef, useState } from 'react';
    import { ProductCard, StyledModal } from './style';
    import productApi from "../../../utils/api/productApi";
    import { Input } from "antd";
    import Button from "../../../components/Button";
    import { useDispatch } from "react-redux";
    import { addProduct } from "./slice";
    import { toastError } from "../../../components/Toast";
    const qrcodeRegionId = "html5qr-code-full-region";
    import Beep from "../../../assets/sound/beep.mp3"

    const useAudio = () => {
        const [audio] = useState(new Audio(Beep));
        const [playing, setPlaying] = useState(false);
    
        const toggle = () => setPlaying(!playing);
    
        useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
        );
    
        useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
        }, []);
    
        return [playing, toggle];
    };

    function Html5QrcodePluginModal({ openScanner, setOpenScanner}) {
        const [ toggle] = useAudio();
        const  fps=20;
        const qrbox=250;
        const disableFlip=false;
        const aspectRatio = 1.777; // Set your desired aspect ratio here (e.g., 16:9)
        const [productCode,setProductCode]=useState("");
        const [showInput, setShowInput] = useState(false); // State to manage input visibility
        const [quantity,setProductQuantity]=useState();
        const [product,setProduct]=useState(null);
        const componentRef = useRef();
        const dispatch=useDispatch();

        const handleAddToCart=()=>{
            if(quantity == 0 ){
                toastError("Product quantity have to be greater then 0")
            }else{
                dispatch(addProduct({...product,addQuantity:quantity}));
                setOpenScanner(false);
            }
        
        }
        const onScanSuccess= async (decodedText)=>{
            toggle();
            setProductCode(decodedText);    
            setShowInput(true); // Show the input field on successful scan
            const token= localStorage.getItem("Authorization");
            const res= await productApi.getProduct(decodedText,0,token);
            setProduct( await res.data.data.content[0]);
    
                componentRef.current.focus();
            
        }
        const onScanError=()=>{

        }
        const html5QrcodeScannerRef = useRef(null);

        useEffect(() => {
            if (openScanner) {
                const config = createConfig();
                const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, true);
                html5QrcodeScannerRef.current = html5QrcodeScanner;
                html5QrcodeScanner.render(onScanSuccess, onScanError);
            } else {
                // Clear the scanner when the modal is closed
                if (html5QrcodeScannerRef.current) {
                    html5QrcodeScannerRef.current.clear().catch(error => {
                        console.error("Failed to clear html5QrcodeScanner. ", error);
                    });
                
                }
            }

            return () => {
                // Clean up the scanner when the component unmounts
                if (html5QrcodeScannerRef.current) {
                    html5QrcodeScannerRef.current.clear().catch(error => {
                        console.error("Failed to clear html5QrcodeScanner. ", error);
                    });
                
                }
            };
        }, [openScanner, onScanSuccess, onScanError, fps, qrbox, aspectRatio, disableFlip]);

        // Function to create the configuration object for Html5QrcodeScanner
        function createConfig() {
            const config = {};
            if (fps) {
                config.fps = fps;
            }
            if (qrbox) {
                config.qrbox = qrbox;
            }
            if (aspectRatio) {
                config.aspectRatio = aspectRatio;
            }
            if (disableFlip !== undefined) {
                config.disableFlip = disableFlip;
            }
            config.cameraIdOrConfig="user";
            return config;
        }

        const handleCancel = () => {
            setOpenScanner(false);
            setProduct(null);
            setProductQuantity(0);
        };

    
    const handleInputChange=(e)=>{
        setProductQuantity( e.target.value);
    }
        return (
            <StyledModal
                visible={openScanner}
                footer={null}
                onCancel={handleCancel}
                centered
                closable={true}
                width={900}
                height={700}
                style={{ padding: 20 }}
            >
                <div id={qrcodeRegionId}  style={{marginTop:"20px" }}/>
                {showInput && (
                    <div className="info">
                        <h1>Found Product </h1>
                        {
                            product && 
                            
                            <ProductCard>
                                <img src={product.productImg}/>
                                <h2>{product.name}</h2>
                                <h3> Product Code: {productCode}</h3>
                                <h2>{product.price} VNĐ</h2>
                                <h2 className="quantity">{product.quantity} Left</h2>
                                <h2>Quantity</h2>
                                <Input
                        type="text"
                        value={quantity}
                        onChange={handleInputChange}
                        placeholder="Enter buy Quantity"
                        ref={componentRef}
                    />
                            </ProductCard>
                        }
                            <Button title="Add to Cart"  style={{marginTop:"20px",padding:"0  20px"}} onClick={handleAddToCart}/>
                            
                            
                                </div>
                
                )}

            </StyledModal>
        );
    }

    export default Html5QrcodePluginModal;

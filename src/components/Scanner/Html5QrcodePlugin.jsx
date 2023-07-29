/* eslint-disable react/prop-types */
import { Html5QrcodeScanner } from "html5-qrcode";
import React from 'react';

const qrcodeRegionId = "html5qr-code-full-region";

class Html5QrcodePlugin extends React.Component {
    render() {
        return <div id={qrcodeRegionId} />;
    }

    componentWillUnmount() {
        if (this.html5QrcodeScanner) {
            this.html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
            this.html5QrcodeScanner.stop().catch(error => {
                console.error("Failed to stop html5QrcodeScanner. ", error);
            });
        }
    }

    componentDidMount() {
        // Creates the configuration object for Html5QrcodeScanner.
        function createConfig(props) {
            var config = {};
            if (props.fps) {
                config.fps = props.fps;
            }
            if (props.qrbox) {
                config.qrbox = props.qrbox;
            }
            if (props.aspectRatio) {
                config.aspectRatio = props.aspectRatio;
            }
            if (props.disableFlip !== undefined) {
                config.disableFlip = props.disableFlip;
            }
            return config;
        }
    
        var config = createConfig(this.props);
        var verbose = this.props.verbose === true;
    
        // Suceess callback is required.
        if (!(this.props.qrCodeSuccessCallback)) {
            throw "qrCodeSuccessCallback is a required callback.";
        }
    
        this.html5QrcodeScanner = new Html5QrcodeScanner(
            qrcodeRegionId, config, verbose);
    
        const { qrCodeSuccessCallback, qrCodeErrorCallback } = this.props;
        this.html5QrcodeScanner.render(
            qrCodeSuccessCallback,
            qrCodeErrorCallback
        );
    }
}

export default Html5QrcodePlugin;
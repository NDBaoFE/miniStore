
import { Link } from "react-router-dom"
import { Wrapper,Container,Background,Hero,Box404, Img } from "./style"
import Forbidden from "../../assets/image/403.svg"
function Error403Page() {
  return (
    <Wrapper >
    <Container className="container">
            <Background>
              <Hero className="text-center ">403</Hero>
            </Background>
            <Img>
                <img src={Forbidden} alt="Forbidden" />
            </Img>
            <Box404>
              <h3 className="h2">
                Look like you&apos;re the wrong path
              </h3>
  
             
  
              <Link to="/" > Go Home</Link>
            </Box404>
    </Container>
  </Wrapper>
  )
}

export default Error403Page
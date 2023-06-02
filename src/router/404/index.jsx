
import { Link } from "react-router-dom"
import { Wrapper,Container,Background,Hero,Box404 } from "./style"
function ErrorPage() {
  return (
    <Wrapper >
    <Container className="container">
            <Background>
              <Hero className="text-center ">404</Hero>
            </Background>
  
            <Box404>
              <h3 className="h2">
                Look like you&apos;re lost
              </h3>
  
              <p>the page you are looking for not avaible!</p>
  
              <Link to="/" > Go Home</Link>
            </Box404>
    </Container>
  </Wrapper>
  )
}

export default ErrorPage
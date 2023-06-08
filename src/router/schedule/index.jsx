import ScheduleComponent from "./components/Schedule"
import { Container,Header,Content } from "./style"

function Schedule() {
  return (
    <Container>
        <Header></Header>
        <Content>
          <ScheduleComponent/>
        </Content>
    </Container>
  )
}

export default Schedule
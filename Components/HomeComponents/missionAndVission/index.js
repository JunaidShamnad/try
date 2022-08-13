import { Section,
  Container,
  AboveContainer,
  Name,
  Title,
  Heading,
  Para,
  MissionVission,
  Image,
  Mission,} from './mission.styled'
function index() {
  return (
    <Section>
    <Container>
      <AboveContainer>
        <Title>Mission & Vision</Title>
        <Heading>Neque Porro Consectetur </Heading>
        <MissionVission>
          <Mission>
            <Image src="/images/Group 47.png" alt="Ground"/>
            <Name>Mission</Name>
            <Para>Lorem Ipsum is simply dummy text of the printing 
standard dummy text ever since the 1500s, when an 
make a type specimen book. It has survived not only 
remaining essentially unchanged. It was popularised 
Lorem Ipsum passages</Para>
          </Mission>
          <Mission>
            <Image src="/images/Group 46.png" alt="Ground"/>
            <Name>Vission</Name>
            <Para>Lorem Ipsum is simply dummy text of the printing 
standard dummy text ever since the 1500s, when an 
make a type specimen book. It has survived not only 
remaining essentially unchanged. It was popularised 
Lorem Ipsum passages</Para>
          </Mission>
        </MissionVission>
        
      </AboveContainer>
    </Container>
  </Section>
  )
}

export default index
import { Section,
  Container,
  LeftContainer,
  RightContainer,
  Text,
  Detail,
  Description,
  Vision,
  Name,
  Title,
  Heading,
  Para,
  MIssionImage,
  MissionVission,
  Image,
  RButton,
  WButton,
  BLButton,
  Buttons,
  Mission,} from './mission.styled'
function index() {
  return (
    <Section>
    <Container>
      <LeftContainer>
        <Title>Mission & Vision</Title>
        <Heading>Neque Porro Consectetur </Heading>
        <Description>Lorem ipsum dolor sit consectetur  
amet adipiscing elitsed 
</Description>
<BLButton>Lorem ipsum</BLButton>


        <MissionVission>
          <Mission>
            <Name>Neque Porro </Name>
            <Description>Lorem ipsum dolor sit consectetur  
            amet adipiscing elitsed 
            </Description>
            <Buttons>
              <RButton>Lorem</RButton>
              <WButton>Lorem</WButton>
            </Buttons>
          </Mission>
          <MIssionImage src="/images/player.png" alt="Ground"/>
        </MissionVission>
      </LeftContainer>
      <RightContainer>
        <Vision>
          <Image src="/images/Group 15.png" alt="Ground"/>
          <Detail>
            <Text>Neque Porro</Text>
            <Para>Lorem ipsum dolor sit consectetur  amet
dipiscing elitsed 
</Para>
          </Detail>
          
        </Vision>
        <Vision>
          <Image src="/images/Group 16.png" alt="Ground"/>
          <Detail>
            <Text>Neque Porro</Text>
            <Para>Lorem ipsum dolor sit consectetur  amet
dipiscing elitsed 
</Para>
          </Detail>
          
        </Vision>
        <Vision>
          <Image src="/images/Group 17.png" alt="Ground"/>
          <Detail>
            <Text>Neque Porro</Text>
            <Para>Lorem ipsum dolor sit consectetur  amet
dipiscing elitsed 
</Para>
          </Detail>
          
        </Vision>
        <Vision>
          <Image src="/images/Group 18.png" alt="Ground"/>
          <Detail>
            <Text>Neque Porro</Text>
            <Para>Lorem ipsum dolor sit consectetur  amet
dipiscing elitsed 
</Para>
          </Detail>
          
        </Vision>
      </RightContainer>
    </Container>
  </Section>
  )
}

export default index;
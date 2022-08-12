import {
  Section,
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Heading,
  Description,
  Logo,
  AboutContainer,
} from "./about.styled";
function index() {
  return (
    <Section>
      <Container>
        <AboutContainer>
          <LeftContainer>
            <Title>About Us</Title>
            <Heading>Something More About Your Company</Heading>
            <Description>
              Lorem Ipsum is simply dummy text of the printing standard dummy
              text ever since the 1500s, when a make a type specimen book. It
              has survived not on remaining essentially unchanged. It was
              populariss Lorem Ipsum passages
            </Description>
          </LeftContainer>
          <RightContainer>
            <Logo src="/images/Group 47.png" />
          </RightContainer>
        </AboutContainer>
      </Container>
    </Section>
  );
}

export default index;

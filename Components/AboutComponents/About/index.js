import {
  Section,
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Heading,
  Description,
  Logo,
  Mainpara,
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
              Lorem Ipsum is simply dummy text of the printing standard dummy text
              ever since the 1500s, when a make a type specimen book. It has
              survived not on remaining essentially unchanged. It was populariss
              Lorem Ipsum passages
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolo magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea come consequat. 
          Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolo magna aliqua.
            </Description>
          </LeftContainer>
          <RightContainer>
            <Logo src="/images/logo.png"/>
          </RightContainer>
        </AboutContainer>
        <Mainpara>
         Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolo magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea come consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Mainpara>
        
      </Container>
    </Section>
  );
}

export default index;

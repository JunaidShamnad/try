import {
  Section,
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Heading,
  Description,
  Button,
  ImageDiv,
  Image,
  ImageTitle,
} from "./about.styled";
function index() {
  return (
    <Section>
      <Container>
        <LeftContainer>
          <Title>About Anfield</Title>
          <Heading>Neque Porro Dolorem Ipsum.</Heading>
          <Description>
            <p>
              lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit
              amet, consectetur adiplorem ipsum dolor sit amet, consectetur
              adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
              sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur
              adip
            </p>
            <p>
              lorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor sit
              amet, consectetur adiplorem ipsum dolor sit amet, consectetur
              adiplorem ipsum dolor sit amet, consectetur adiplorem ipsum dolor
              sit amet, consectetur adiplorem ipsum dolor sit amet, consectetur
              adiplorem ipsum dolor sit amet, consectetur adip
            </p>
          </Description>
          <Button>Lorem</Button>
        </LeftContainer>
        <RightContainer>
          <ImageDiv>
            <Image src="/images/Group 46.png" alt="About" />
            <ImageTitle>Neque Porro</ImageTitle>
          </ImageDiv>
          <ImageDiv>
          <Image src="/images/Group 47.png" alt="About" />
            <ImageTitle>Neque Porro</ImageTitle>
          </ImageDiv>
          <ImageDiv>
          <Image src="/images/Group 48.png" alt="About" />
            <ImageTitle>Neque Porro</ImageTitle>
          </ImageDiv>
        </RightContainer>
      </Container>
    </Section>
  );
}

export default index;

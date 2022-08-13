import {
  Section,
  Container,
  ImageContainer,
  TextContainer,
  Title,
  Heading,
  Description,
  AboutContent,
  FirstContent,
  SecondContent,
  Image,
  ImageTitle,
} from "./MoreAbout.styled";
function index() {
  return (
    <Section>
      <Container>
        <AboutContent>
          <FirstContent>
            <TextContainer>
              <Title>Somthing</Title>
              <Heading>Something About Your Vission</Heading>
              <Description>
                Lorem Ipsum is simply dummy text of the printing standard dummy
                text ever since the 1500s, when an make a type specimen book. It
                has survived not only remaining essentially unchanged. It was
                popularised Lorem Ipsum passages
              </Description>
            </TextContainer>
            <ImageContainer>
              <Image src="/images/Group 46.png" alt="Ground"/>
              <ImageTitle>Neque Porro</ImageTitle>
            </ImageContainer>
          </FirstContent>
          <SecondContent>
            <ImageContainer>
              <Image src="/images/Group 48.png" alt="Ground"/>
              <ImageTitle>Neque Porro</ImageTitle>
            </ImageContainer>
            <TextContainer>
              <Title>Somthing</Title>
              <Heading>Something About Your Vission</Heading>
              <Description>
                Lorem Ipsum is simply dummy text of the printing standard dummy
                text ever since the 1500s, when an make a type specimen book. It
                has survived not only remaining essentially unchanged. It was
                popularised Lorem Ipsum passages
              </Description>
            </TextContainer>
          </SecondContent>
        </AboutContent>
      </Container>
    </Section>
  );
}

export default index;

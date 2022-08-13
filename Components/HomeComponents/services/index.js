import {
  Section,
  Container,
  Services,
  Title,
  Heading,
  Description,
  Button,
  Sliders
} from "./services.styled";
import Slider from './SliderCarousel'
function index() {
  return (
    <Section>
      <Container>
        <Services>
          <Title>Our Services</Title>
          <Heading>Neque Porro Dolorem Ipsum.</Heading>
          <Description>
            Lorem ipsum dolor sit consectetur amet adipiscing elitsed
          </Description>
          <Button>Lorem</Button>
        </Services>
        <Sliders>
          <Slider/>
        </Sliders>
      </Container>
    </Section>
  );
}

export default index;

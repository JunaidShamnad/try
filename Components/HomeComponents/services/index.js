import {
  Section,
  Container,
  Services,
  Title,
  Heading,
  Description,
  Button,
  Sliders,
} from "./services.styled";
// import { Slider } from "./components/Slider";
// import sliders from '../../../pages/api/slider'
import Example from "./slider";
function index() {

  // const [visibleItemsNumber, setVisibleItemsNumber] = useState(3);

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
          <Example/>
        
      {/* <div className="controls">
        <label htmlFor="visibleItemsNumber">Number of visible slides</label>
        <input
          id="visibleItemsNumber"
          type="number"
          value={visibleItemsNumber}
          onChange={e => setVisibleItemsNumber(Number(e.target.value))}
        />
      </div>

      <Slider slides={sliders} visibleItemsNumber={visibleItemsNumber}>
        {(sliders.map((slider)=>{
          return(
            <img
            id={slide.id}
            src={slide.image}
            alt="nature landscape"
            className="image"
          />
          )
        }))}
          
        
      </Slider> */}
        </Sliders>
      </Container>
    </Section>
  );
}

export default index;

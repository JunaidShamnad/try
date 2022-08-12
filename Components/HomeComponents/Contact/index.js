import {
  Section,
  Container,
  Title,
  Description,
  Contact,
  ContactTitle,
  ContactDescription,
  ContactDetails,
  Detail,
  SocialMediaIcons,
  Form,
  DetailText,
  Input,
  Inputs,
  Button,
  Message
} from "./contact.styled";
import { BsFillTelephoneFill,BsFillEnvelopeOpenFill ,BsFacebook,BsInstagram,BsLinkedin,BsWhatsapp,BsTwitter} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fawhatsapp } from '@fortawesome/free-solid-svg-icons'
function index() {
  return (
    <Section>
      <Title>Contact Us</Title>
      <Description>Lorem ipsum dolor sit consectetur</Description>
      <Container>
        <Contact>
          <ContactTitle>Contact information</ContactTitle>
          <ContactDescription>
            Lorem ipsum dolor sit consectetur Lorem ipsum dolor sit consectetur
          </ContactDescription>
          <ContactDetails>
            <Detail>
              <BsFillTelephoneFill/>
              <DetailText>+91 54554 239 32</DetailText>
            </Detail>
            <Detail>
              <BsFillEnvelopeOpenFill/>
              <DetailText>loremipsum@gmail.com</DetailText>
            </Detail>
            <Detail>
              <GoLocation/>
              <DetailText>Lorem Ipsum</DetailText>
            </Detail>
          </ContactDetails>
          <SocialMediaIcons>
            <BsFacebook/>
            <BsTwitter/>
            <BsInstagram/>
            <BsWhatsapp/>
            <BsLinkedin/>
          </SocialMediaIcons>
        </Contact>

        <Form>
          <Inputs>
            <Input placeholder="First Name"/>
            <Input placeholder="Last Name"/>
          </Inputs>
          <Inputs>
            <Input placeholder="Email"/>
            <Input placeholder="Phone"/>
          </Inputs>
          <Message placeholder="Message"/>
          <Button>Submit</Button>
        </Form>
      </Container>
    </Section>
  );
}

export default index;

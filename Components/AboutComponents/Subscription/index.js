import {
  Section,
  Container,
  Title,
  Description,
  AboutSubscription,
  LeftSubscription,
  RightSubscription,
  InputButton,
  InputEmail,
  Heading,
} from "./subscription.styled";
function index() {
  return (
    <Section>
      <Container>
        <AboutSubscription>
          <LeftSubscription>
            <Heading>Neque Porro </Heading>
            <Description>
              Lorem ipsum dolor sit consectetur amet adipiscing elitsed
            </Description>
          </LeftSubscription>
          <RightSubscription>
            <InputEmail type="text" placeholder="Enter your email" />
            <InputButton type="submit">Send</InputButton>
          </RightSubscription>
        </AboutSubscription>
      </Container>
    </Section>
  );
}

export default index;

import {
  Section,
  Container,
  LeftContainer,
  RightContainer,
  Head,
  Menu,
  NavLink,
  NavItem,
  NavLinkA,
  Services,
  TypeOfServices,
  SocialMedia,
  Icons,
  Description,
  Image,
  ImagePost,
  About,
  FooterDiv,
  GButton,
  BannerDiv,
  AboutDescription
} from "./footer.styled";

import Links from "../../pages/api/menuLinks";
import categories from "../../pages/api/serviceCategories"
import {BsFacebook,BsInstagram,BsLinkedin,BsWhatsapp,BsTwitter} from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fawhatsapp } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  return (
    <Section>
      <Container>
        <BannerDiv>
          <LeftContainer>
            <Head>Neque Porro</Head>
            <Description>Lorem ipsum dolor sit consectetur  
amet adipiscing elitsed 
</Description>
          </LeftContainer>
          <RightContainer>
            <GButton>Lorem</GButton>
          </RightContainer>
          <ImagePost src="/images/goalpost.png" alt="Post"/>
        </BannerDiv>
        <FooterDiv>
           <About>
            <Image src="/images/logo.png" alt="Logo"/>
            <AboutDescription>Lorem ipsum dolor sit 
consectetur Lorem
</AboutDescription>
           </About>
           <Menu>
            <Head>Headers</Head>
            {Links.map((link) => (
              <NavItem key={link.id}>
              <NavLink href={link.to}>
                <NavLinkA> {link.name}</NavLinkA>
              </NavLink>
            </NavItem>
            ))}
           </Menu>
           <Services>
           <Head>Services</Head>
           <TypeOfServices>
          {categories.map((categorie,index) => {
            return <Description key={index} value={categorie.category}>{categorie.category}</Description>;
          })}
        </TypeOfServices>
           </Services>
           <SocialMedia>
            <Head>Follow Us</Head>
            <Icons>
            <BsFacebook/>
            <BsTwitter/>
            <BsInstagram/>
            <BsWhatsapp/>
            <BsLinkedin/>
            </Icons>
           <Head>Further Information</Head>
            <Description>Terms & conditions</Description>
            <Description>Privacy Policy</Description>
           </SocialMedia>
        </FooterDiv>
      </Container>
    </Section>
  );
}

export default Footer;

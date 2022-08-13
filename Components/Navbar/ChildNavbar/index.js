import React,{ useState, useEffect } from "react";
import Links from "../../../pages/api/menuLinks";
import LogoImage from "../../../public/images/logo.png";
import {
  Logo,
  LogoText,
  MenuIcon,
  MobileMenu,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavLinkA,
  NavMenu,
} from "./ChildNavbar.styled";


const ChildNavbar = ({ toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const LogoValue = "text";


  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    
    <Nav  scrollNav={scrollNav} >
      <NavContainer>
        <NavLink href="/">
         <NavLinkA>{LogoValue === "text" ?<LogoText>Anfield.</LogoText> :<Logo src={LogoImage.src} alt="logo" />}</NavLinkA>
        </NavLink>
        <MobileMenu onClick={toggle}>
          <MenuIcon />
        </MobileMenu>
        <NavMenu>
          {Links.map((link) => (
            <NavItem key={link.id}>
              <NavLink href={link.to}>
                <NavLinkA> {link.name}</NavLinkA>
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>
      </NavContainer>
    </Nav>
    
  );
};

export default ChildNavbar;

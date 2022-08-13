import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export const Section = styled.section`
background-color: #171717;
padding:100px 150px;
color: #fff;
@media (max-width:767px){
    padding: 30px;
}

`
export const Container = styled.div`
display: flex;
flex-direction: column;
@media (max-width:767px){
    flex-direction: column;
}


`
export const Description = styled.p`
font-size:16px;
text-align:center;
margin:10px 0;
@media (max-width:767px){
    font-size:12px;
    margin-left: 0;
    text-align: left;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`
export const AboutDescription = styled.p`
font-size:16px;
text-align:center;
width: 80%;
margin:10px 0;
@media (max-width:767px){
    font-size:12px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`
export const Head = styled.h1`
font-size:25px;
text-align: center;
margin-bottom: 20px;
@media(max-width:767px){
    font-size:20px;
    margin-bottom: 0;
    
}
@media(min-width:768px)and (max-width: 1367px){
    font-size: 25px;
}
`
export const Menu = styled(motion.ul)`
  display: flex;
  align-items: flex-start;
  margin-right: -24px;
  display: flex;
  width: 25%;
flex-direction: column;
margin-bottom: 50px;
@media (min-width: 768px)and (max-width: 1367px){
    width: 100%;
}
@media (max-width: 768px){
    width: 100%;
}
`
export const NavItem = styled(motion.li)`
  list-style: none;
  margin-right: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const NavLink = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  justify-content: space-between;
  cursor: pointer;
  
`;
export const NavLinkA = styled(motion.a)`
@media (max-width:767px){
    font-size:13px;
    
  }
  cursor: pointer;
`;

export const Services = styled.div`
display: flex;
flex-direction: column;
width: 25%;
align-items: flex-start;
margin-bottom: 50px;
@media (min-width: 768px)and (max-width: 1367px){
    width: 100%;
}
@media (max-width: 768px){
    width: 100%;
}
`
export const TypeOfServices = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
@media (min-width: 768px)and (max-width: 1367px){
    width: 100%;
}
@media (max-width: 768px){
    width: 100%;
}
`
export const SocialMedia = styled.div`
display: flex;
flex-direction: column;
width: 25%;
align-items: flex-start;
@media (min-width: 768px)and (max-width: 1367px){
    width: 100%;
}
@media (max-width: 768px){
    width: 100%;
}
`
export const Icons = styled.div`
display: flex;
flex-direction: row;
font-size:25px;
width: 100%;
justify-content: space-between;
margin-bottom: 50px;
`
export const FooterDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width:767px){
    flex-direction: column;
}
@media (min-width: 768px)and (max-width: 1367px){
    flex-direction: column;
}
`
export const About = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 50px;
width: 25%;
@media (max-width:767px){
    align-items: flex-start;
    width: 100%;
}
@media (min-width: 768px)and (max-width: 1367px){
    align-items: flex-start;
    width: 100%;
}
`
export const Image = styled.img`
width:100%;
height:50%;
`
export const GButton = styled.div`
background-color: #0EBC2A;
border:2px solid #fff;
border-radius:5px;
padding: 20px 50px;
position: relative;
z-index:9;
@media (max-width:767px){
    padding: 5px 20px;
    font-size: 13px;
}
`
export const BannerDiv = styled.div`
display: flex;
background-color:#00B11D;
color: #fff;
padding:50px 125px;
flex-direction: row;
justify-content: space-between;
align-items:center;
height: 100%;
margin-bottom: 50px;
width: 100%;
border-radius:5px;
position: relative;
@media (max-width: 768px){
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;
}
@media (min-width: 768px)and (max-width: 1367px){
    padding: 30px;
    flex-direction: column;
}
`
export const LeftContainer = styled.div`
text-align-last: left;
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
@media (min-width: 768px)and (max-width: 1367px){
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
`
export const RightContainer = styled.div`
@media(max-width: 768px){
    display: flex;
flex-direction: column;
justify-content: flex-start;
}
`
export const ImagePost = styled.img`
position: absolute;
bottom: 10px;
right: 10px;
width: 30%;
z-index:0;
height: 100%;
@media (max-width: 768px){
    width: 50%;
    height: 50%;
}
@media (min-width: 768px)and (max-width: 1367px){
    width: 50%;
    height: 50%;
}
`
import styled from "styled-components";

export const Section = styled.section`
padding:0 170px;
@media(max-width:767px){
    padding: 30px;
}
@media(min-width:768px)and (max-width: 1367px){
    padding:60px;
}
`
export const Container = styled.div`

`
export const LeftContainer = styled.div`
width:50%;
@media(max-width:767px){
    width: 100%;
}
@media(min-width:768px)and (max-width: 1367px){
    width: 100%;
}
`
export const RightContainer = styled.div`
width:50%;
@media(max-width:767px){
    width: 100%;
}
@media(min-width:768px)and (max-width: 1367px){
    width: 100%;
}

`
export const Title = styled.h4`
width: 300px;
height: 55px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color:#00B11D;
border-radius: 5px;
color: #fff;
font-size: 16px;
font-weight: normal;
margin-bottom:28px;
@media(max-width:767px){
    font-size: 32px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:25px;
}
`
export const Heading = styled.h1`
font-size:32px;
font-weight: bold;
margin-top: 0;
margin-bottom:47px;
@media(max-width:767px){
    font-size: 16px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`
export const Description = styled.p`
font-size:16px;
margin-top: 0;
font-weight: 500;
margin-bottom:20px;
@media(max-width:767px){
    font-size: 12px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`
export const Logo = styled.img`
width:100%;
height: 100%;
@media(max-width:767px){
    width:90%;
}
@media(min-width:768px)and (max-width: 1367px){
    width: 60%;
}
`
export const Mainpara = styled.p`
font-size:16px;
margin-top: 0;
font-weight: 500;
margin-bottom:165px;
@media(max-width:767px){
    font-size:12px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`
export const AboutContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
@media(max-width:767px){
    flex-direction: column;
}
@media(min-width:768px)and (max-width: 1367px){
     flex-direction: column;
}
`

 
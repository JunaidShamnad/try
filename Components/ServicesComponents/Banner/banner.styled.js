import styled from "styled-components"

export const Section = styled.section`
background-image: url("/images/Sports.png");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
height:30vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
@media (max-width:767px){
    display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width:768px)and (max-width: 1367px){

}
`
export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
color:white;
@media (max-width:767px){
    
}
`

export const Heading = styled.h1`
font-size:32px;
font-weight: bold;
margin-top: 0;
margin-bottom:47px;
margin-bottom: 0;
@media (max-width:767px){
    font-size:28px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:40px;
}
`
export const Description = styled.p`
font-size:16px;
margin-top: 0;
font-weight: 500;
margin-bottom:47px;
width: 30%;
margin-top: 8px;
text-align: center;
@media (max-width:767px){
    font-size:12px;
    width: 80%;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:25px;
    width: 100%;
}
`
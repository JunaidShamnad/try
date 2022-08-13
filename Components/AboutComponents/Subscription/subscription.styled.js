import styled from "styled-components";

export const Section = styled.section`
background-color:#F7F7F7;
`
export const Container = styled.div`
width: 100%;
`

export const Heading = styled.h1`
font-size:32px;
font-weight: bold;
margin-top: 0;
margin-bottom:47px;
@media(max-width:767px){
    font-size: 32px;
}
`
export const Description = styled.p`
font-size:16px;
margin-top: 0;
font-weight: 500;
margin-bottom:47px;
width: 90%;
@media(max-width:767px){
    font-size: 12px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`
export const AboutSubscription = styled.div`
display: flex;
padding:100px 150px;
flex-direction: row;
align-items: center;
justify-content: space-between;
@media(max-width:767px){
    padding: 30px;
    flex-direction: column;
}
`
export const LeftSubscription = styled.div`
width: 50%;
@media(max-width:767px){
    width: 100%;
}
`
export const RightSubscription = styled.div`
display: flex;
flex-direction: row;
width: 50%;
@media(max-width:767px){
    width: 100%;
}
`
export const InputButton = styled.button`
background-color:#077C1A;
height:70px;
width:150px;
font-size:16px;
outline:none;
color:#fff;
border:none;
border-bottom-right-radius:5px;
border-top-right-radius:5px;
@media(max-width:767px){
    width: 40%;
    padding: 0 15px;
    font-size: 12px;
    height: 40px;
    border-bottom-right-radius:5px;
    border-top-right-radius:5px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:17px;
}
`
export const InputEmail = styled.input`
width:450px;
background-color: #FFFFFF;
padding:0 27px;
font-size:16px;
height:70px;
border:none;
outline:none;
border-bottom-left-radius:5px;
border-top-left-radius:5px;
@media(max-width:767px){
    width: 100%;
    padding: 0 15px;
    font-size: 12px;
    height: 40px;
    border-bottom-left-radius:5px;
    border-top-left-radius:5px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:17px;
}
`

 
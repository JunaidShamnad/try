import styled from "styled-components";

export const Section = styled.section`
height:30vh;
width:100%;
background-image:url('../../../images/marcus-wallis-mUtQXjjLPbw-unsplash.png');
background-repeat: no-repeat;
background-size: cover;
background-position: bottom center;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
@media (max-width: 768px){
    height: 50vh;
    display: flex;
  align-items: center;
  justify-content: center;
}
@media(min-width:768px)and (max-width: 1367px){
    height: 20vh;
}
`
export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
color: #fff;
`
export const Title = styled.h4`
font-size:32px;
margin-bottom: 10px;
@media (max-width: 768px){
    font-size: 28px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:30px;
}
`
export const Description = styled.p`
font-size: 16px;
margin-top: 0;
@media (max-width: 768px){
    font-size:12px;
    width: 80%;
    text-align: center;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}

`
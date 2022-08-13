import styled from "styled-components";

export const Section = styled.section`
background-color:#000;
color:#fff;
`
export const Container = styled.div`
width: 100%;
`
export const ImageContainer = styled.div`
width:50%;
padding:150px;
position: relative;
@media(max-width:767px){
    padding:30px;
}
@media(min-width:768px)and (max-width: 1367px){
    padding:60px;
}
`
export const TextContainer = styled.div`
width:50%;
padding:150px;
@media(max-width:767px){
    padding: 30px;
    width: 100%;
}
@media(min-width:768px)and (max-width: 1367px){
    width: 100%;
    padding: 60px;
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
    flex-direction: column;
}
@media(min-width:768px)and (max-width: 1367px){
    flex-direction: column;
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
margin-bottom:47px;
@media(max-width:767px){
    font-size: 12px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`
export const FirstContent = styled.div`
display: flex;
flex-direction: row;
@media(max-width:767px){
    flex-direction: column-reverse;
}
@media(min-width:768px)and (max-width: 1367px){
    flex-direction: column-reverse;
}

`
export const SecondContent = styled.div`
display: flex;
flex-direction: row;
@media(max-width:767px){
    flex-direction: column;
}
@media(min-width:768px)and (max-width: 1367px){
    flex-direction: column;
}
`
export const Image = styled.img`
width:100%;
height: 100%;
object-fit: cover;
@media(max-width:767px){
    width: 300px;
    height: 250px;
}
@media(min-width:768px)and (max-width: 1367px){
    width: 700px;
    height: 500px;
}
`
export const AboutContent = styled.div`
width:100%;
`
export const ImageTitle = styled.p`
position: absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
font-size:40px;
font-weight: bold;
color:white;
@media (max-width: 768px){
    font-size:20px;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-0%,-50%);
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:25px;
}
`


 
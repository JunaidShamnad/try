import styled from "styled-components";


export const Section = styled.section`
padding:165px 200px;
padding-bottom: 0;
@media (max-width:767px){
    padding: 30px;
}
@media(min-width:768px)and (max-width: 1367px){
    padding: 60px;
}
`
export const Container = styled.div`

`
export const TypeOfServices = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content:center;
@media (max-width:767px){
    display: grid;
    grid-template-columns: auto auto;
    width: 100%;
}
@media(min-width:768px)and (max-width: 1367px){
   display: grid;
    grid-template-columns: auto auto;
    width: 100%;
}
`
export const ServiceList = styled.div`
margin-top: 150px;
@media (max-width:767px){
    margin-top: 50px;
}
@media(min-width:768px)and (max-width: 1367px){
    
}
`
export const Service = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
margin-bottom: 50px;
@media (max-width:767px){
    flex-direction: column;
    align-items: flex-start;
}
@media(min-width:768px)and (max-width: 1367px){
   flex-direction: column;
    align-items: flex-start;
}
`
export const ServiceText = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 80%;
margin-left: 20px;
@media (max-width:767px){
    width: 100%;
    margin-left: 0;
}

`
export const ServiceButton = styled.button`
width: 150px;
height:40px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color:transparent;
color: #000;
border:none;
border-radius: 11px;
font-size: 16px;
font-weight: 400;
margin:20px 15px;
@media (max-width:767px){
    padding: 0;
    width: 100%;
    font-size:16px;
    padding: 0;
    height: 40px;
    margin: 15px 10px;
    
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`

export const Title = styled.h4`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
color:#00B11D;
border-radius: 5px;
font-size: 32px;
font-weight: 500;
margin-bottom:0;
margin-top: 0;
@media (max-width:767px){
    font-size:16px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:25px;
}
`
export const Description = styled.p`
font-size:16px;
margin-top: 0;
width:620px;
font-weight: 500;
margin-bottom:20px;
@media (max-width:767px){
    font-size:12px;
    width: 100%;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}
`
export const Image = styled.img`
width: 360px;
height:200px;
border-radius:30px;
@media (max-width:767px){
    width: 100%;
    height: 50%;
}
@media(min-width:768px)and (max-width: 1367px){
    width: 100%;
    height: 50%;
}
`
export const Button = styled.button`
width:180px;
height:45px;
background-color:#E61C29;
color:white;
font-size: 16px;
border:none;
outline:none;
border-radius: 6px;
@media (max-width:767px){
    width: 100%;
    height: 40px;
    font-size:16px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
    width: 100%;
    height: 60px;
}
`
export const Heading = styled.h1`
font-size:32px;
font-weight:bold;
color:#000;
text-align:center;
margin-bottom: 90px;
@media (max-width:767px){
    font-size:32px;
    margin-bottom: 30px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:25px;
}
`

import styled from "styled-components";

export const Section = styled.section`
background-color: #f7f7f7;
padding:100px 100px;
@media (max-width:767px){
    padding: 30px;
}
@media(min-width:768px)and (max-width: 1367px){
    padding: 60px;
}
`
export const Container = styled.div`
display: flex;
flex-direction: row;
@media (max-width:767px){
    flex-direction: column;
}
@media(min-width:768px)and (max-width: 1367px){
    flex-direction: column;
}


`
export const Title = styled.h4`
font-size:32px;
text-align:center;
margin-bottom: 15px;
@media (max-width:767px){
    font-size:32px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:25px;
}

`
export const Description = styled.p`
font-size:16px;
text-align:center;
margin-top: 0;
margin-bottom:67px;
@media (max-width:767px){
    font-size:16px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}

`
export const Contact = styled.div`
margin-top: 0;
background-color: #E61C29;
padding:75px 100px;
border-radius: 30px;
width: 50%;
color:#fff;
@media (max-width:767px){
    padding: 20px;
    width: 100%; 

}
@media(min-width:768px)and (max-width: 1367px){
   padding: 40px;
    width: 100%; 
}
`
export const ContactTitle = styled.h4`
font-size:32px;
font-weight: bold;
margin: 20px 0;
@media (max-width:767px){
    font-size:32px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:25px;
}

`
export const ContactDescription = styled.p`
font-size:16px;
margin: 20px 0;
@media (max-width:767px){
    font-size:12px;
}
@media(min-width:768px)and (max-width: 1367px){
    font-size:20px;
}

`
export const ContactDetails = styled.div`


`
export const Detail = styled.div`
display: flex;
align-items: center;

`
export const SocialMediaIcons = styled.div`
color:white;
display: flex;
flex-direction: row;
justify-content: space-evenly;
font-size: 25px;
margin-bottom: 25px;
margin-top: 25px;

`
export const Form = styled.form`
width:50%;
padding: 30px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
background-color: #fff;
border-top-right-radius: 30px;
border-bottom-right-radius: 30px;
@media (max-width:767px){
    width: 100%;
}
@media(min-width:768px)and (max-width: 1367px){
    width: 100%;
}
`
export const DetailText = styled.p`
margin-left: 15px;
margin-top: 20px;
margin-bottom: 20px;
@media (max-width: 768px) {
   
   font-size: 12px !important;
} 

`
export const Input = styled.input`
width: 45%;
margin: 20px 0;
padding: 20px;
margin-top: 20px;
border:none;
outline: none;
border-bottom:1px solid black;
@media (max-width: 768px){
    width: 100%;
}

`
export const Inputs = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 768px){
    flex-direction: column;
}
`
export const Button = styled.button`
width: 100%;
text-align: center;
background-color:red;
border:none;
outline: none;
color: #fff;
font-weight: bold;
font-size:20px;
border-radius:5px;
padding: 20px 10px;
margin-top: 50px;
@media (max-width: 768px){
    width: 100%;
}
`
export const Message = styled.input`
width: 100%;
padding: 20px;
margin-top:50px;
outline: none;
border:none;
border-bottom:1px solid black;
@media (max-width: 768px){
    width: 100%;
}
`

import { useState } from "react";
import {
  Section,
  Container,
  TypeOfServices,
  ServiceList,
  Service,
  ServiceText,
  ServiceButton,
  Title,
  Description,
  Image,
  Heading,
  Button,
} from "./services.styled";
import services from "../../../pages/api/services";
import categories from "../../../pages/api/serviceCategories";


function ServicePage() {
  const[categorys,setCategorys] = useState("Play Grounds");
  const[active,setActive] = useState("")
  // console.log(categorys);

  
  return (
    <Section>
      <Container>
        <Heading>Our Services</Heading>
        <TypeOfServices>
          {categories.map((categorie,index) => {
            return <ServiceButton key={index} value={categorie.category} name={categorie.id}class={active} onClick={((e)=>{
              setCategorys(e.target.value)
              // console.log(e.target.name)
              // if(categorie.id==e.target.name){
              //   setActive("Active")
              // }
              // else{
              //   setActive("")
              // }
              
            })} className="">{categorie.category}</ServiceButton>;
          })}
        </TypeOfServices>
        <ServiceList>
          {services.map((service,index) => {
            if(categorys==service.category){
              return (
              <Service key={index}>
                <Image src={service.image}  alt="Ground"/>
                <ServiceText>
                  <Title>{service.title}</Title>
                  <Description>{service.description}</Description>
                </ServiceText>
                <Button>Lorem</Button>
              </Service>
            );
            }
            
          })}
        </ServiceList>
      </Container>
    </Section>
  );
}

export default ServicePage;

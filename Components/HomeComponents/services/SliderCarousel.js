import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Title,
  Description,
  Buttons,
  Button,
  Section,
  Image,
  ImageDiv,
  SliderIconContainer,
  PrevArrow,
  NextArrow,
  IconCircle,
} from "./styled.elements";
import Link from "next/link";
import slides from "../../../pages/api/slider";

function Home() {
  const [current, setCurrent] = useState(2);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    timeout.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
   
    <Section>
        <IconCircle>
            {" "}
            <PrevArrow onClick={prevSlide} />
        </IconCircle>
      {slides.map((slide, index) => (
        <Container key={index}>
          {index === current && (
            <ImageDiv>
              <Image src={slide.img}  alt="Ground"/>

            </ImageDiv>
          )}
        </Container>
      ))}
        <IconCircle>
            {" "}
            <NextArrow onClick={nextSlide} />
        </IconCircle>
    </Section>

 
  );
}

export default Home;
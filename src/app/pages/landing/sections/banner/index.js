import React from "react";
import { Container, Text } from "./styles";
import { H1, H5 } from "app/components/font";

const Banner = () => {
  return (
    <Container>
      <Text>
        <H1 className="title-1">Hello! I'm Agesta Saputra</H1>
        <H1 className="title-2">
          We use only the finest and <br />
          freshest ingredients
        </H1>
        <H5 className="subtitle-1">
          At sway catering we know that food is an important part of life. <br />
          If the meal is not perfect, your event cannot be perfect.
        </H5>
        <button type="button" className="btn btn-success my-4 pa-2"> Request a Quote </button>
      </Text>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 319">
        <path fill="#fff" 
        fillOpacity="1" 
        d="M0,128L80,154.7C160,181,320,235,480,218.7C640,203,800,117,960
        ,106.7C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280
        ,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" 
        />
      </svg>
    </Container>
  );
};

export default Banner;

import React from "react";
import { Container } from "./styles";
// import { P3 } from "app/components/font";
import { H1, H6 } from "app/components/font";

const Footer = () => {
  return (
    <Container>
      <H1 className="title mb-3">
        Catering services in New York
      </H1>
      <H1 className="body mb-3">
        We specialize in corporate and private events
      </H1>
      <H6 className="subtitle">
        With 20 years of experience, we promise you the freshest, local ingredients, hand-crafted <br />
        cooking sprinkled with our unique whimsical elegance and exceptional service.
      </H6>
    </Container>
  );
};

export default Footer;

import React from "react";
import { Container, Header, Text } from "./styles";
import { H1, H4 } from "app/components/font";
import Button from "app/components/button";
import Logo from "app/assets/logo.png";

const Banner = () => {
  return (
    <Container>
      <Header>
      <img className="logo" src={Logo} alt="logo" />
      </Header>
      <Text>
        <H1 className="title-1">Hello! I'm Agesta Saputra</H1>
        <H1 className="title-2">Consult Design, and Develop Websites</H1>
        <H4 className="subtitle-1">
          Have something great in mid? Feel free to contact me.
        </H4>
        <H4 className="subtitle-2">I'll help you make it happen.</H4>
        <Button className="btn outline">Let's Make Contact</Button>
      </Text>
    </Container>

    // <Container>
    //   <img src={BannerImg} alt="banner-img" />
    //   <Text>
    //     <H1 className="title-1">Hello! I'm Agesta Saputra</H1>
    //     <H1 className="title-2">Consult Design, and Develop Websites</H1>
    //     <H4 className="subtitle-1">
    //       Have something great in mid? Feel free to contact me.
    //     </H4>
    //     <H4 className="subtitle-2">I'll help you make it happen.</H4>
    //   </Text>
    // </Container>
  );
};

export default Banner;

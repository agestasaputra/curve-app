import React from "react";
import { Container } from "./styles";
import Banner from "./sections/banner"
import Sidebar from "app/components/sidebar"
import Footer from "./sections/footer";

const Landing = ({ state }) => {

  return (
    <Container>
      <Banner />
      <Sidebar />
      <Footer />
    </Container>
  );
};

export default Landing;

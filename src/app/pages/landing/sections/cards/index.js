import React from "react";
import { Container } from "./styles";
import Card from "app/components/card";

const Cards = ({ state }) => {
  return (
    <Container>
      {state &&
        state.dataLandingPage.dataCards &&
        state.dataLandingPage.dataCards.map(item => (
          <Card
            key={item.id}
            title={item.title}
            icon={item.icon}
            desc={item.desc}
          />
        ))}
    </Container>
  );
};

export default Cards;

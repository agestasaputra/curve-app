import React from "react";
import { Container, Title, Icon, Desc } from "./styles";
import { H2, P3 } from "app/components/font";
import { NavLink } from "react-router-dom";

const Card = props => {
  return (
    <NavLink to={props.title ? `/card/${props.title}/` : null}>
      <Container.Wrapper width={props.width}>
        <Container.Top>
          <Title>
            <H2 className="title">{props.title ? props.title : "-"}</H2>
          </Title>
          <Icon className="icon">{props.icon ? props.icon : "-"}</Icon>
        </Container.Top>
        <Container.Bottom>
          <Desc>
            <P3 className="desc">{props.desc ? props.desc : "-"}</P3>
          </Desc>
        </Container.Bottom>
      </Container.Wrapper>
    </NavLink>
  );
};

export default Card;

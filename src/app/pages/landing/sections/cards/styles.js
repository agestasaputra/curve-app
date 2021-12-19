import styled from "styled-components";
import { XS_DEVICES_WIDTH, S_DEVICES_WIDTH } from "config/guidlines/display";

export const Container = styled.div`
  width: 100%;
  padding: 0px 20px 50px 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 25px;

  a {
    text-decoration: none;
  }

  @media (min-width: ${XS_DEVICES_WIDTH}) {
    grid-template-columns: 1fr 1fr;
  }

  @media(min-width: ${S_DEVICES_WIDTH}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

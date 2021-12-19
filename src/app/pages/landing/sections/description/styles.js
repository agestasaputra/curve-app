import styled from "styled-components";
import { XS_DEVICES_WIDTH } from "config/guidlines/display";

export const Container = styled.div`
  width: 100%;
  padding: 50px 0px;
  text-align: center;

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    padding: 40px 20px;
  }

  .title {
    margin-bottom: 15px;
  }
  .desc {
  }
`;

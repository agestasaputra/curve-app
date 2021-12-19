import styled from "styled-components";
import color from "config/guidlines/color";
import { XS_DEVICES_WIDTH } from "config/guidlines/display";

export const Container = styled.div`
  padding: 20px 0px;
  text-align: center;
  background: ${color.brand.primaryPurple};

  .text {
    color: #fff;
  }

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    padding: 30px 0px;
  }
`;

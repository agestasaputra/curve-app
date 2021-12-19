import styled from "styled-components";
import color from "config/guidlines/color";
import BannerImg from "app/assets/banner.jpg";
import { XS_DEVICES_WIDTH, S_DEVICES_WIDTH, M_DEVICES_WIDTH } from "config/guidlines/display";

export const Container = styled.div`
  width: 100%;
  height: 550px;
  background-image:
    linear-gradient(to bottom, rgb(8 1 111 / 65%), rgba(18,42, 66, .85)),
    url(${BannerImg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  filter: sepia(90%) hue-rotate(170deg) saturate(500%) grayscale(20%);

  @media (max-width: ${S_DEVICES_WIDTH}) {
    height: 300px;
  }

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    height: 200px;
  }

  .logo {
    margin: 2%;
    width: auto;
    height: 50px;

    @media (max-width: ${XS_DEVICES_WIDTH}) {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Header = styled.div`
  flex: 0.1;
  width: 100%;
`

export const Text = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  text-align: center;
  margin-bottom: 5%;

  .title-1 {
    color: ${color.brand.primaryWhite} !important;
    font-weight: 500;
  }

  .title-2 {
    margin: 10px 0px;
    color: ${color.brand.primaryWhite} !important;

    @media (max-width: ${M_DEVICES_WIDTH}) {
      margin: 15px 0px;
    }

    @media (max-width: ${XS_DEVICES_WIDTH}) {
      margin: 10px 0px;
    }
  }

  .subtitle-1 {
    color: ${color.brand.primaryWhite} !important;
    font-weight: 500;
  }

  .subtitle-2 {
    color: ${color.brand.primaryWhite} !important;
    font-weight: unset;
  }

  .btn {
    margin: 5px auto;

    @media (max-width: ${XS_DEVICES_WIDTH}) {
      font-size: 8px;
      font-weight: unset;
      padding: 8px 10px !important;
    }
  }
`;

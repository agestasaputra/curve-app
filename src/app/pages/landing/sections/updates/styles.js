import styled from "styled-components";
import color from "config/guidlines/color";
import { XS_DEVICES_WIDTH, S_DEVICES_WIDTH, M_DEVICES_WIDTH } from "config/guidlines/display";

export const Container = {
  Wrapper: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 20px;
    background: ${color.brand.primaryBlue};
    opacity: 0;
    height: 0px;
    max-width: 640px;
    transition: 0.5s;

    &.show {
      height: 170px;
      opacity: 1;

      @media (max-width: ${M_DEVICES_WIDTH}) {
        max-width: 450px;
        height: 200px;
        padding: 15px;
      }

      @media (max-width: ${S_DEVICES_WIDTH}) {
        height: 270px;
        padding: 20px;
      }

      @media (max-width: ${XS_DEVICES_WIDTH}) {
        padding: 15px 20px;
        height: 215px;
      }
    }

    &.hidden {
      height: 0px;
      opacity: 0;
    }

    
  `,
  Header: styled.div`
    text-align: right;

    .fa-times {
      color: ${color.brand.primaryWhite};
      cursor: pointer;
    }
  `,
  Content: styled.div`
    .title {
      color: ${color.brand.primaryWhite};

      @media (max-width: ${M_DEVICES_WIDTH}) {
        margin-bottom: 15px;
      }
    }
    .text {
      color: ${color.brand.primaryWhite};
    }
  `,
  Footer: styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-top: 10px;

    @media (max-width: ${XS_DEVICES_WIDTH}) {
      flex-flow: column nowrap;
    }

    .input-email {
      flex: 1;
      margin-right: 5px;
      padding: 0px 5px;

      @media (max-width: ${XS_DEVICES_WIDTH}) {
        flex: unset;
        margin: 0px 0px 10px 0px;
        height: 30px;
      }
    }

    .btn-updates {
      text-transform: unset;
      
      @media (max-width: ${XS_DEVICES_WIDTH}) {
        width: 100%;
      }
    }
  `
};

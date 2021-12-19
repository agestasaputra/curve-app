import styled from "styled-components";
import {
  XS_DEVICES_WIDTH
} from "config/guidlines/display";

export const Container = {
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    height: 70px;
    opacity: 1;
    transition: 0.5s;
    
    @media (max-width: ${XS_DEVICES_WIDTH}) {
      height: 100px;
    }

    &.hidden {
      height: 0px;
      opacity: 0;
    }

    
  `,
  Content: styled.div`
    display: flex;
    flex-flow: row nowrap;
    max-width: 720px;
    padding: 15px;

    @media (max-width: ${XS_DEVICES_WIDTH}) {
      flex-flow: column nowrap;
      width: fit-content;
    }
  `,
  Left: styled.div`
    flex: 1;
    margin-right: 5px;

    a {
      color: #0000ee;
    }

    @media (max-width: ${XS_DEVICES_WIDTH}) {
      flex: unset;
      margin: 0px 0px 5px 0px;
    }
  `,
  Right: styled.div`
    display: flex;
    align-items: center;

    button {
      text-transform: unset;

      @media (max-width: ${XS_DEVICES_WIDTH}) {
        font-size: 11px;
        font-weight: unset;
        text-transform: unset;
        padding: 5px 10px !important;
      }
    }
  `
};

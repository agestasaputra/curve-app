import styled from "styled-components";
import color from "config/guidlines/color";

export const Wrapper = styled.div`
  cursor: pointer;
  width: ${props => (props.width ? props.width : "fit-content")};
  background: transparent;
  height: unset;
  border-radius: 0.4em;

  &.disabled {
    border: 1px solid red;
    cursor: not-allowed;
    background: #e8e9e9;
  }

  &.btn-page {
    border-radius: 5em;
    color: ${color.brand.primaryWhite};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2.5vw;
    height: 2.5vw;
    max-width: 50px;
    max-height: 50px;
    margin: 0px 5px;
  }
`;

export const Container = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #007bfe;
  border: unset;
  color: #fff;
  width: ${props => (props.width ? props.width : "unset")};
  padding: 8px 10px !important;
  cursor: inherit;
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 0.4em;

  /* 
    :hover {
      opacity: 0.8;
    } 
  */

  &.btn-updates {
    background: ${color.brand.primaryOrange};
  }

  &.disabled {
    color: ${color.brand.primaryGray};
    pointer-events: none;
  }

  svg {
    fill: #fff;
  }

  &.outline {
    border: 2px solid ${color.brand.primaryWhite};
    background: transparent;
    text-transform: uppercase;
    color: ${color.brand.primaryWhite};

    :hover {
      background: #fff;
      color: ${color.brand.primaryBlack};

      svg {
        fill: ${color.brand.primaryWhite};
      }
    }
  }

  &.btn-page {
    border-radius: 5em;
    color: ${color.brand.primaryWhite};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 2.5vw;
    height: 2.5vw;
    max-width: 50px;
    max-height: 50px;
    margin: 0px 5px;
  }
`;

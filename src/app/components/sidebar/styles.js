import styled from "styled-components";
import { XS_DEVICES_WIDTH } from "config/guidlines/display";

export const Container = styled.div`
  position: fixed;
  display: flex;
  top: 40%;
  right: 0;

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    display: none;
  }

  .title-list {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-end;
    margin-right: 20px;
    
    .title {
      flex: 1;
      background: #fff;
      border-radius: 4em;
      padding: 10px;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      box-shadow: 0px 0px 10px 1px #888888;
      color: green;
      visibility: hidden;

      &.show {
        visibility: visible;
      }
    }
  }

  .btn-group-vertical {
    background: #fff;
    border-radius: 0.5em;
    box-shadow: 0px 0px 10px 1px #888888;

    .btn {
      border-bottom: 1px solid #e3e3e3;

      i {
        color: #565656;
      }

      &:hover {
        i {
          color: green;
        }
      }
    }
  }
`;
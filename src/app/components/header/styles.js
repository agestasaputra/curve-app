import styled from "styled-components";
import color from "config/guidlines/color";
import { S_DEVICES_WIDTH, XS_DEVICES_WIDTH } from "config/guidlines/display";

export const Navbar = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  padding: 20px;
  background: ${color.brand.primaryWhite};
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
`;
export const NavbarLeft = styled.div`
  flex: 1;

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    display: none;
  }
  
  .btn {
    color: ${color.brand.primaryLightGray};

    &:hover {
      cursor: pointer;
      color: black;
    }
  }
  
  .portofolio-list-menu {
    color: ${color.brand.primaryLightGray};

    &.show {
      display: grid;
    }

    width: 100%;
    padding: 30px 0px 10px 0px;
    grid-template-columns: 1fr 1fr 1fr;
    left: 0;
    
    display: none;

    ul {
      list-style-type: none;
      margin: 0px;
      color: #366aff;

      &[title]::before {
        content: attr(title);
        /* then add some nice styling as needed, eg: */
        display: block;
        font-weight: bold;
        padding: 0px;
        margin: 10px 0px;
      }
      
      .dropdown-item {
        padding: 0px;
        color: #110097;
        margin: 5px 0px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
export const NavbarRight = styled.div`}
  flex: 0.25;
  display: flex;
  align-items: center;

  @media (max-width: ${S_DEVICES_WIDTH}) {
    flex: 0.5;
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: ${XS_DEVICES_WIDTH}) {
    flex: 1;
  }

  .fa-shopping-cart, .fa-search {
    color: ${color.brand.primaryLightGray};
    margin-right: 20px;

    &:hover {
      cursor: pointer;
      color: black;
    }
  }

  .fa-bars {
    display: none;
    color: ${color.brand.primaryLightGray};

    &:hover {
      cursor: pointer;
      color: black;
    }

    @media (max-width: ${XS_DEVICES_WIDTH}) {
      display: block;
    }
  }

  input {
    @media (max-width: ${XS_DEVICES_WIDTH}) {
      display: none;
    }
  }
`;

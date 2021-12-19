import styled from "styled-components";
import color from "config/guidlines/color";
import { XS_DEVICES_WIDTH, M_DEVICES_WIDTH } from "config/guidlines/display";

export const Container = {
  Wrapper: styled.div`
    text-decoration: none;
    border: 1px solid ${color.brand.primaryGray};
    width: 100%;
    height: fit-content;
    padding: 30px 20px;

    :hover {
      background: #f9f9f9;
      border: 1px solid #848484;
    }
  `,
  Top: styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-bottom: 15px;
  `,
  Bottom: styled.div``
};

export const Title = styled.div`
  flex: 1;
`;

export const Icon = styled.div`
  text-align: right;

  i {
    color: ${color.brand.primaryDarkGray};
    font-size: 20px;
  }
`;

export const Desc = styled.div`
  text-align: left;

  .desc {
    @media (max-width: ${M_DEVICES_WIDTH}) {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    @media (max-width: ${XS_DEVICES_WIDTH}) {
      display: unset;
      -webkit-line-clamp: unset;
      -webkit-box-orient: unset;
      overflow: unset;
    }
  }
`;

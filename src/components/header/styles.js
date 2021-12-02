import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #240046;
  color: #fff;
  height: 140px;
  width: 100%;

  h1 {
    font-size: 36px;
  }
  /* section {
    display: flex;
    align-items: center;

    input {
      padding: 10px 5px;
      border: none;
      border-radius: 5px 0 0 5px;
      width: 160px;
    }

    button {
      padding: 9.5px 5px;
      border: none;
      border-radius: 0 5px 5px 0;
      width: 90px;
      background: #5a189a;
      color: #fff;
      font-weight: 500;
      font-size: 15px;

      &:hover {
        cursor: pointer;
        filter: brightness(0.9);
      }
    }
  } */

  span {
    svg {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }

    &:hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }

  @media screen and (min-width: 768px) {
    span {
      align-self: flex-end;
      margin-right: 65px;
    }
  }

  @media screen and (min-width: 960px) {
    flex-direction: row;
    justify-content: space-between;

    h1 {
      margin-left: 65px;
    }
    span {
      align-self: inherit;
    }
  }
`;

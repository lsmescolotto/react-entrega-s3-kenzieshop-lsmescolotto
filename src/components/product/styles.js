import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 450px;
  border: solid 2px #999;
  border-radius: 10px;
  background: #ffffff;
  margin-top: 30px;
  box-shadow: 0 0 1em #7b2cbf;

  &:hover {
    border: solid 2px #7b2cbf;
  }

  img {
    width: 250px;
    height: 250px;
  }

  h3 {
    font-size: 20px;
  }

  span {
    font-size: 16px;
  }

  button {
    background: #7b2cbf;
    color: #ffffff;
    border: none;
    padding: 15px 25px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;

    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }

  @media screen and (min-width: 768px) {
    margin: 20px;
  }

  @media screen and (miin-width: 960px) {
    button {
      font-size: 16px;
    }
  }
`;

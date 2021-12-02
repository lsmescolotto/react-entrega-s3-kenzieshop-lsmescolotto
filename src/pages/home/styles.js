import styled from "styled-components";

export const Container = styled.main`
  h2 {
    font-size: 22px;
    align-self: flex-start;
    margin: 30px 0 0 0;
    text-align: center;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 90vh;

    &:last-child {
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: 768px) {
    h2 {
      text-align: left;
      margin: 30px 0 0 70px;
    }
    section {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  @media screen and (min-width: 960px) {
    h2 {
      margin: 30px 0 0 150px;
    }
  }
`;

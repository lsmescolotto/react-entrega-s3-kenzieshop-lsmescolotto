import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 22px;
    margin-top: 30px;
  }
  section {
    div {
      flex-direction: row;
      height: 100px;
      margin-top: 15px;
      border: solid 2px #fff;
      box-shadow: 0 0 1em #999;
      img {
        width: 60px;
        height: 60px;
      }
      h3 {
        font-size: 14px;
        width: 75px;
      }
      span {
        width: 52px;
        font-size: 14px;
      }
      button {
        width: 70px;
        padding: 10px 2px;
      }

      &:hover {
        box-shadow: 0 0 1em #7b2cbf;
        border: solid 2px #7b2cbf;
      }
    }
  }

  &:last-child {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) {
    h2 {
      margin-bottom: 20px;
    }
    section {
      border: solid 2px #ced4da;
      border-radius: 8px;
      min-width: 508px;
      min-height: 143px;
      div {
        width: 460px;

        img {
          width: 70px;
          height: 70px;
        }
        h3 {
          font-size: 16px;
        }
        span {
          width: 75px;
          font-size: 16px;
        }
        button {
          width: 80px;
          padding: 10px;
        }
      }
    }
  }
`;

import styled from "styled-components";

export const RestInfoStyle = styled.div`
  background-color: #e9eaf5;
  .restDetails {
    margin: 10px auto 0px;
    width: 60%;
    padding-bottom: 10px;

    .restInfo {
      display: flex;
      align-items: end;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    h2 {
      margin: 10px 0px;
    }
    p {
      margin: 5px 0px;
    }
    .totalRating {
      text-align: center;
      padding: 10px;
      border: 1px solid #233142;
      border-radius: 5px;
      width: 60%;
      & .rating {
        color: #267e3e;
        font-weight: 600;
        padding: 5px;
      }
    }
    .restRating {
      display: grid;
      justify-items: center;
    }
    .timeAndCost {
      font-weight: 600;
      padding: 10px;
      font-size: 16px;
    }
  }

  .shimmerMenu {
    margin: 10px auto 0px;
    width: 60%;
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .leftInfo {
      border-bottom: 1px solid #ddd;
      & div {
        width: 350px;
        height: 20px;
        background: #ddd;
        margin: 10px 0px;
      }
      & div:nth-child(1){width: 600px}
      & div:nth-child(3){width: 500px}
      & div:nth-child(4){width: 200px}
    }
    & .rightInfo {
      width: 150px;
      height: 120px;
      background: #ddd;
      border-radius: 5px;
    }
  }
`;
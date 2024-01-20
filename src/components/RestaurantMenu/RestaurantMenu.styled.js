import styled from "styled-components";

export const RestInfoStyle = styled.div`
    background-color: #e9eaf5;
  .restDetails {
    margin: 10px auto 0px;
    width: 60%;
    padding-bottom: 10px;

    .restInfo {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    h2{
        margin: 10px 0px;
    }
    p{
        margin: 5px 0px;
    }
    .totalRating{
        text-align: center;
        padding: 10px;
        border: 1px solid #233142;
        border-radius: 5px;
        width: 60%;
    }
    .restRating{
        display: grid;
        justify-items: center;
    }
    .timeAndCost{
        font-weight: 600;
        padding: 10px;
        font-size: 16px;
    }
  }
`;
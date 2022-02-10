import styled from "styled-components";
import "@fontsource/roboto";

const CardListStyled = styled.div`
  background-color: #24282f;

  .container {
    background-color: #24282f;
    padding: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0;
  }

  h3.card-text {
    color: #f0eb74;
    font-weight: bold;
  }

  .card {
    font-family: "Roboto";
    margin: 40px 0 40px 0;
    min-height: 460px;
    width: 250px;
    color: #fff;
  }
`;

export default CardListStyled;

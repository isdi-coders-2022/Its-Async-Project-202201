import styled from "styled-components";

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

  .card {
    margin: 10px;
    margin-top: 40px;
    margin-bottom: 40px;
    width: 250px;
  }
`;

export default CardListStyled;

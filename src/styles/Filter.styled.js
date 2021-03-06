import styled from "styled-components";
import "@fontsource/roboto";

const StyledFilters = styled.nav`
  background-color: #24282f;
  height: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .filterButton {
    height: 40px;
    background-color: #f0eb74;
    border-radius: 5px;
    width: 170px;
    border-style: none;
    margin-right: 80px;
    font-family: "Roboto";

    &:hover {
      background-color: #55cc44;
    }
  }

  h2 {
    margin-left: 120px;
    color: #f0eb74;
  }

  .filterMenu {
    margin-right: 40px;
  }

  @media (max-width: 576px) {
    display: flex;
    height: 130px;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: space-evenly;

    .title {
      margin-left: 0px;
    }

    .filterMenu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0px;
    }

    .filterMenu > .filterButton {
      width: 100px;
      height: 30px;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
`;

export default StyledFilters;

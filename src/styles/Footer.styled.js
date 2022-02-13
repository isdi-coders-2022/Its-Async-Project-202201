import styled from "styled-components";
import "@fontsource/roboto";

const StyledFooter = styled.footer`
  background-color: #f0eb74;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;

  .image-container {
    position: relative;
    bottom: 80px;
  }

  .footer-text-holder-2 {
    position: relative;
    bottom: 20px;
  }

  .footer-text-holder {
    position: relative;
    bottom: 50px;
  }

  p {
    color: #24282f;
    font-family: "Roboto";
    font-size: 16px;
  }

  img {
    width: 120px;
  }

  @media (max-width: 576px) {
    p {
      font-size: 8px;
      color: #24282f;
    }
    .footer-text-holder-2 {
      position: static;
    }

    .footer-text-holder {
      position: static;
    }
    .image-container {
      position: static;
    }
    img {
      width: 50px;
    }
    display: flex;
    height: 130px;
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-content: space-evenly;
  }
`;

export default StyledFooter;

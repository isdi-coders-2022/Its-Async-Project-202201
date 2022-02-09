import styled from "styled-components";

const NavBarStyled = styled.div`
  .navHome {
    display: flex;
    margin-left: 60px;
  }

  .links {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    margin-top: 10px;
  }

  .navPage {
    display: flex;
    align-content: center;
  }

  .links li {
    margin-right: 185px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  .navImg {
    background-color: black;
    background-clip: border-box;
    background-image: inherit;
    height: 200px;
    background-image: url("images/portalBackground.jpg");
  }

  .navBar {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #24282f;
    align-content: center;
  }

  .navImg img {
    height: 150px;
    margin-top: 20px;
    margin-left: 20px;
  }

  @media (max-width: 576px) {
    .navImg {
      display: none;
    }

    .navBar {
      background-color: #55cc44;
    }

    .links li {
      margin: 0;
      margin-right: 20px;
    }

    .navHome {
      margin-left: 20px;
    }
  }
`;
export default NavBarStyled;

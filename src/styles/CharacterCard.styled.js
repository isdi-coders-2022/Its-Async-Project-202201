import styled from "styled-components";

const CharacterCardStyled = styled.div`
  .card {
    background-color: #4d4f56;

    &:hover {
      background-color: #55cc44;

      .favIcon {
        color: #f0eb74;
        background-color: #24282f;
      }
    }

    .linksContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .favIcon {
    color: #4d4f56;
    background-color: #24282f;
    padding: 7px;
    border-radius: 5px;
  }
`;

export default CharacterCardStyled;

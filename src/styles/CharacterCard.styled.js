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

    a {
      text-decoration: none;
      font-weight: bold;
      color: #fff;
    }

    a:hover {
      text-decoration: underline;
    }
  }

  .favIcon {
    color: #4d4f56;
    background-color: #24282f;
    border-radius: 5px;
    cursor: pointer;
  }
  .favIcon.star {
    padding: 6px;
  }
  .favIcon.bin {
    padding: 6px 11px;
  }
`;

export default CharacterCardStyled;

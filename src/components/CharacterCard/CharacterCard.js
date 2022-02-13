import CharacterCardStyled from "../../styles/CharacterCard.styled";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FavIcon from "../Icon/FavIcon";
import BinIcon from "../Icon/BinIcon";
import EditIcon from "../Icon/EditIcon";

const CharacterCard = ({ character, actionAddFav, deleteCharacter }) => {
  const location = useLocation();
  let navigate = useNavigate();

  const navigateToForm = () => {
    navigate(`/edit/${character.id}`);
  };

  return (
    <>
      <CharacterCardStyled>
        <li className="card">
          <div className="cardContainer">
            <img
              src={character.image}
              className="card-img-top"
              alt="alternative"
            />
            <div className="card-body">
              <h3 className="card-text">{character.name}</h3>
              <p className="card-text">
                {`${character.species} - ${character.gender}`}
              </p>
              <p className="card-text">{character.status}</p>

              <div className="linksContainer">
                <Link to={`/character/${character.id}`}>More Info</Link>
                {location.pathname === "/home" && (
                  <i
                    title="FAV"
                    className="favIcon star"
                    onClick={() => {
                      actionAddFav(character);
                    }}
                  >
                    <FavIcon className="favIcon"></FavIcon>
                  </i>
                )}

                {character.created === true && (
                  <i className="favIcon star" onClick={navigateToForm}>
                    <EditIcon className="favIcon"></EditIcon>
                  </i>
                )}

                {location.pathname === "/favorites" && (
                  <i
                    className="favIcon bin"
                    onClick={() => deleteCharacter(character.id)}
                  >
                    <BinIcon className="favIcon"></BinIcon>
                  </i>
                )}
              </div>
            </div>
          </div>
        </li>
      </CharacterCardStyled>
    </>
  );
};

export default CharacterCard;

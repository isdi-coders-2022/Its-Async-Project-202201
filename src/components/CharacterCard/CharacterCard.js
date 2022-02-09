const CharacterCard = ({ character }) => {
  return (
    <>
      <li className="card">
        <div className="cardContainer">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            className="card-img-top"
            alt="alternative"
          />
          <div className="card-body">
            <p className="card-text">{character.name}</p>
            <p className="card-text">
              {`${character.species} - ${character.gender}`}
            </p>
            <p className="card-text">{character.status}</p>
            <a href="..........."> + Info </a>
          </div>
        </div>
      </li>
    </>
  );
};

export default CharacterCard;

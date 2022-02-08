const CharacterCard = ({ character }) => {
  return (
    <>
      <li className="card">
        <div className="cardContainer">
          <img src={character.url} className="card-img-top" alt="alternative" />
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

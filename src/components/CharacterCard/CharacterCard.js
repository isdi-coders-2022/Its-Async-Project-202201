const CharacterCard = () => {
  return (
    <>
      <li className="card">
        <div className="cardContainer">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/36.jpeg"
            className="card-img-top"
            alt="alternative"
          />
          <div className="card-body">
            <p className="card-text">Evil Morty</p>
            <p className="card-text">Human - Male</p>
            <p className="card-text">Alive</p>
            <a href="..........."> + Info </a>
          </div>
        </div>
      </li>
    </>
  );
};

export default CharacterCard;

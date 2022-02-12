import StyledFilters from "../../styles/Filter.styled";

const Filter = ({
  text,
  actionFilterHumans,
  actionFilterAliens,
  actionFilterAlive,
}) => {
  return (
    <>
      <StyledFilters>
        <h2 className="title">{text}</h2>
        <div className="filterMenu">
          <button
            className="filterButton"
            type="button"
            onClick={actionFilterHumans}
          >
            Humans
          </button>
          <button
            className="filterButton"
            type="button"
            onClick={actionFilterAliens}
          >
            Aliens
          </button>
          <button
            className="filterButton"
            type="button"
            onClick={actionFilterAlive}
          >
            Alive
          </button>
        </div>
      </StyledFilters>
    </>
  );
};

export default Filter;

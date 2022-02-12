import StyledFilters from "../../styles/Filter.styled";

const Filter = ({ text, actionOnClick }) => {
  return (
    <>
      <StyledFilters>
        <h2 className="title">{text}</h2>
        <div className="filterMenu">
          <button
            className="filterButton"
            type="button"
            onClick={actionOnClick}
          >
            Humans
          </button>
          <button className="filterButton" type="button">
            Status
          </button>
          <button className="filterButton" type="button">
            Species
          </button>
        </div>
      </StyledFilters>
    </>
  );
};

export default Filter;

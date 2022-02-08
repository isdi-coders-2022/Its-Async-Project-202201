import StyledFilters from "../../styles/Filter.styled";

const Filter = () => {
  return (
    <>
      <StyledFilters>
        <h2 className="title">ALL CHARACTERS</h2>
        <div className="filterMenu">
          <button className="filterButton" type="button">
            Button
          </button>
          <button className="filterButton" type="button">
            Button
          </button>
          <button className="filterButton" type="button">
            Button
          </button>
        </div>
      </StyledFilters>
    </>
  );
};

export default Filter;

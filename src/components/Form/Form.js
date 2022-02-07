import Button from "../Button/Button";

const Form = () => {
  return (
    <>
      <form>
        <label htmlFor="floatingName" className="form-label">
          Character Name
        </label>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            placeholder="CharacterName"
          />
          <label htmlFor="floatingName">Rick Sanchez</label>
        </div>

        <label htmlFor="floatingCharacterStatus" className="form-label">
          Character Status
        </label>
        <select className="form-select form-select-lg mb-3">
          <option value="1">Alive</option>
          <option value="2">Dead</option>
          <option value="3">Unknown</option>
        </select>

        <label htmlFor="floatingCharacterSpecies" className="form-label">
          Character Species
        </label>
        <select className="form-select form-select-lg mb-3">
          <option value="1">Human</option>
          <option value="2">Alien</option>
          <option value="3">Unknown</option>
        </select>

        <label htmlFor="floatingCharacterGender" className="form-label">
          Character Gender
        </label>
        <select className="form-select form-select-lg mb-3">
          <option value="1">Female</option>
          <option value="2">Male</option>
          <option value="3">Unknown</option>
        </select>

        <label htmlFor="floatingImage" className="form-label">
          Character Image
        </label>
        <div className="form-floating mb-3">
          <input
            type="url"
            className="form-control"
            id="floatingImage"
            placeholder="ImageUrl"
          />
          <label htmlFor="floatingName">URL</label>
        </div>
        <Button />
      </form>
    </>
  );
};

export default Form;

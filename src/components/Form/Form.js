import Button from "../Button/Button";

const Form = ({ actionOnSubmit, buttonText, changeData, formData }) => {
  return (
    <>
      <section className="container mb-3">
        <form className="mb-3" onSubmit={actionOnSubmit} autoComplete="off">
          <label htmlFor="floatingName" className="form-label"></label>
          <div className="form-floating mb-3">
            <input
              name="name"
              type="text"
              className="form-control"
              id="floatingName"
              placeholder="CharacterName"
              value={formData.name}
              onChange={changeData}
            />
            <label htmlFor="floatingName">Character Name</label>
          </div>

          <div className="form-floating mb-3">
            <label
              htmlFor="floatingCharacterStatus"
              className="form-label"
            ></label>
            <input
              name="status"
              type="text"
              className="form-control"
              id="floatingCharacterStatus"
              placeholder="CharacterName"
              value={formData.status}
              onChange={changeData}
            />
            <label htmlFor="floatingName">Character Status</label>
          </div>

          <div className="form-floating mb-3">
            <label
              htmlFor="floatingCharacterSpecies"
              className="form-label"
            ></label>
            <input
              name="species"
              type="text"
              className="form-control"
              id="floatingCharacterSpecies"
              placeholder="CharacterName"
              value={formData.species}
              onChange={changeData}
            />
            <label htmlFor="floatingName">Character Species</label>
          </div>

          <div className="form-floating mb-3">
            <label
              htmlFor="floatingCharacterGender"
              className="form-label"
            ></label>
            <input
              name="gender"
              type="text"
              className="form-control"
              id="floatingCharacterGender"
              placeholder="CharacterName"
              value={formData.gender}
              onChange={changeData}
            />
            <label htmlFor="floatingName">Character Gender</label>
          </div>

          <div className="form-floating mb-3">
            <label htmlFor="floatingImage" className="form-label"></label>
            <input
              name="image"
              type="url"
              className="form-control"
              id="floatingImage"
              placeholder="ImageUrl"
              value={formData.image}
              onChange={changeData}
            />
            <label htmlFor="floatingName">Image URL</label>
          </div>
          <Button
            type="submit"
            text={buttonText}
            actionOnClick={actionOnSubmit}
          />
        </form>
      </section>
    </>
  );
};

export default Form;

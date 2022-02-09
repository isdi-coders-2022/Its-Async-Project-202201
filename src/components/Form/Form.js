import { useState } from "react";
import useCharacters from "../../hooks/useCharacters";
import Button from "../Button/Button";

const Form = () => {
  const { addCharactersAPI } = useCharacters();

  const blankFields = {
    name: "",
    status: "",
    species: "",
    gender: "",
    image: "",
    id: 1,
  };

  const [formData, setFormData] = useState(blankFields);

  const onFormSubmit = (event) => {
    event.preventDefault();
    addCharactersAPI(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData(blankFields);
  };

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <form onSubmit={onFormSubmit} autoComplete="off">
        <label htmlFor="floatingName" className="form-label">
          Character Name
        </label>
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
          <label htmlFor="floatingName">Rick Sanchez</label>
        </div>

        <label htmlFor="floatingCharacterStatus" className="form-label">
          Character Status
        </label>
        <input
          name="status"
          type="text"
          className="form-control"
          id="floatingCharacterStatus"
          placeholder="CharacterName"
          value={formData.status}
          onChange={changeData}
        />

        <label htmlFor="floatingCharacterSpecies" className="form-label">
          Character Species
        </label>
        <input
          name="species"
          type="text"
          className="form-control"
          id="floatingCharacterSpecies"
          placeholder="CharacterName"
          value={formData.species}
          onChange={changeData}
        />

        <label htmlFor="floatingCharacterGender" className="form-label">
          Character Gender
        </label>
        <input
          name="gender"
          type="text"
          className="form-control"
          id="floatingCharacterGender"
          placeholder="CharacterName"
          value={formData.gender}
          onChange={changeData}
        />

        <label htmlFor="floatingImage" className="form-label">
          Character Image
        </label>
        <div className="form-floating mb-3">
          <input
            name="image"
            type="url"
            className="form-control"
            id="floatingImage"
            placeholder="ImageUrl"
            value={formData.image}
            onChange={changeData}
          />
          <label htmlFor="floatingName">URL</label>
        </div>
        <Button type="submit" text={"Send"} actionOnClick={onFormSubmit} />
      </form>
    </>
  );
};

export default Form;

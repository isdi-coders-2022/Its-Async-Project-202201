import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import useCharacters from "../../hooks/useCharacters";

const CreatePage = () => {
  const { addCharactersAPI } = useCharacters();
  let navigate = useNavigate();

  const blankFields = {
    name: "",
    status: "",
    species: "",
    gender: "",
    image: "",
    id: "",
    created: true,
  };

  const [formData, setFormData] = useState(blankFields);

  const onFormSubmit = (event) => {
    event.preventDefault();
    addCharactersAPI(formData);
    resetForm();
    setTimeout(() => {
      navigate(`/favorites`);
    }, 1800);
  };

  const resetForm = () => {
    setFormData(blankFields);
  };

  const changeData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <Form
        buttonText="Create"
        actionOnSubmit={onFormSubmit}
        changeData={changeData}
        formData={formData}
      ></Form>
    </>
  );
};

export default CreatePage;

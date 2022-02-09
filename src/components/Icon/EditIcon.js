import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const EditIcon = () => {
  return (
    <>
      <FontAwesomeIcon
        title="EDIT"
        icon={faEdit}
        className="editIcon"
        size="2x"
      />
    </>
  );
};

export default EditIcon;

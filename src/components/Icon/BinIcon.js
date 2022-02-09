import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const BinIcon = () => {
  return (
    <>
      <FontAwesomeIcon
        title="DELETE"
        icon={faTrashCan}
        className="deleteIcon"
        size="2x"
      />
    </>
  );
};

export default BinIcon;

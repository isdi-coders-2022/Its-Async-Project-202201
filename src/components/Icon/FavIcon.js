import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FavIcon = () => {
  return (
    <>
      <FontAwesomeIcon
        title="FAV"
        icon={faStar}
        className="favIcon"
        size="2x"
      />
    </>
  );
};

export default FavIcon;

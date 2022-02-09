import { useReducer, useState } from "react";
import characterReducer from "../reducers/characterReducer";
import CharacterContext from "./CharacterContext";

const CharacterContextProvider = ({ children }) => {
  const [characters, dispatch] = useReducer(characterReducer, []);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <CharacterContext.Provider
      value={{ characters, pageNumber, dispatch, setPageNumber }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;

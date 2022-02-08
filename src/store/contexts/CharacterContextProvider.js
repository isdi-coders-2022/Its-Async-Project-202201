import { useReducer } from "react";
import characterReducer from "../reducers/characterReducer";
import CharacterContext from "./CharacterContext";

const CharacterContextProvider = ({ children }) => {
  const [characters, dispatch] = useReducer(characterReducer, []);

  return (
    <CharacterContext.Provider value={{ characters, dispatch }}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContextProvider;

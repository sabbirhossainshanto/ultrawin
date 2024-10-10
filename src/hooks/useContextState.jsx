import { useContext } from "react";
import { ApiContext } from "../context/ApiProvider";

/* state provider short cut hook */
const useContextState = () => {
  const state = useContext(ApiContext);
  return state;
};

export default useContextState;

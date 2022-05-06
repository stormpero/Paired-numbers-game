import {useContext} from "react";
import devContext from "./DevContext";

export const useDev = () => {
  return useContext(devContext);
}


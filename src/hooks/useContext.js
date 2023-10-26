import { useContext } from "react";

import { userContext } from "../userContext/userContext";

export const useUserContext = () => {
  return useContext(userContext);
};

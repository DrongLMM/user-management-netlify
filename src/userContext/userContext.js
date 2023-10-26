import React, { useReducer } from "react";
import { data } from "../data";

export const userContext = React.createContext({});

const reducer = (state, action) => {
  if (action.type === "DELETE") {
    return { ...state, users: action.payload };
  }
  if (action.type === "ADD") {
    return { ...state, users: [...state.users, action.payload] };
  }

  if (action.type === "EDIT") {
    return { ...state, users: action.payload };
  }

  return state;
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    users: data.users,
  });

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
};

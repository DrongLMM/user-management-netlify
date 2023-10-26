import React from "react";

import User from "./User";
import { useUserContext } from "../hooks/useContext";

function Users({ isEdit, setId }) {
  const { state } = useUserContext();
  return (
    <div className="container ">
      <div className="row">
        {state.users.map((user) => {
          return (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              isEdit={isEdit}
              setId={setId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Users;

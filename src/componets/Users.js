import React from "react";

import User from "./User";
import { useUserContext } from "../hooks/useContext";

function Users({ isEdit, setId }) {
  const { state } = useUserContext();
  return (
    <section>
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
    </section>
  );
}

export default Users;

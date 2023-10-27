import React from "react";
import { useUserContext } from "../hooks/useContext";

function User({ email, id, name, isEdit, setId }) {
  const { state, dispatch } = useUserContext();
  const handleEdit = (id) => {
    setId(id);
    isEdit(true);
  };

  const handleDelete = (id) => {
    const filtered = state.users.filter((user) => user.id !== id);
    dispatch({ type: "DELETE", payload: filtered });
    console.log(filtered);
  };

  return (
    <div className="card col-sm-12 col-lg-4" style={{ margin: "2px" }}>
      <div className="card-body">
        <h5 className="card-title">ID: {id}</h5>
        <p className="card-text">Name: {name}</p>
        <p className="btn btn-primary d-block">{email}</p>
        <button className="btn btn-primary m-4" onClick={() => handleEdit(id)}>
          Edit User
        </button>
        <button className="btn btn-danger" onClick={() => handleDelete(id)}>
          Delete User
        </button>
      </div>
    </div>
  );
}

export default User;

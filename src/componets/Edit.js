import React, { useState } from "react";
import { useUserContext } from "../hooks/useContext";

function EditUser({ setEdit, id }) {
  const { state, dispatch } = useUserContext();

  const userToEdit = state.users.filter((user) => user.id === id);

  console.log(userToEdit);

  const [editUser, setEditUser] = useState({
    id: id,
    name: userToEdit[0].name,
    email: userToEdit[0].email,
  });

  console.log(editUser);

  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const filtered = state.users.filter((user) => user.id !== id);

    const editedUser = [...filtered, editUser];

    dispatch({ type: "EDIT", payload: editedUser });
    setEditUser({ name: "", email: "" });
    setEdit(false);
  };

  return (
    <div>
      <form
        className="col col-sm-12 col-lg-6"
        style={{
          width: "50%",
          margin: "0  auto 10px",
          border: "1px solid black",
          padding: "15px",
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <h2>Edit User</h2>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={editUser.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={editUser.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Edit User
        </button>
      </form>
      <button className="btn btn-secondary mb-3" onClick={() => setEdit(false)}>
        Add User
      </button>
    </div>
  );
}

export default EditUser;

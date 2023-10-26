import React, { useState } from "react";
import { useUserContext } from "../hooks/useContext";

function AddUser() {
  const [newUser, setNewUser] = useState({ id: "", name: "", email: "" });

  const { dispatch } = useUserContext();

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD", payload: newUser });
    setNewUser({ id: "", name: "", email: "" });
  };

  return (
    <form
      style={{
        width: "50%",
        margin: "0  auto 10px",
        border: "1px solid black",
        padding: "15px",
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <h2>Add New User</h2>
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
          value={newUser.name}
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
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add User
      </button>
    </form>
  );
}

export default AddUser;

import { useState } from "react";
import "./App.css";

import AddUser from "./componets/AddUser";
import Users from "./componets/Users";
import EditUser from "./componets/Edit";
import { UserProvider } from "./userContext/userContext";

function App() {
  const [isEdit, setEdit] = useState(false);
  const [id, setId] = useState("");
  return (
    <div className="App">
      <UserProvider>
        <h1>User Management App For Netlify</h1>
        {isEdit ? <EditUser setEdit={setEdit} id={id} /> : <AddUser />}

        <Users isEdit={setEdit} setId={setId} />
      </UserProvider>
    </div>
  );
}

export default App;

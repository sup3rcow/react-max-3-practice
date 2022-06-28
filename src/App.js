import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersListHandler] = useState([]);
  const onAddUserHandler = (user) => {
    setUsersListHandler((prevState) => [user, ...prevState]);
  };
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;

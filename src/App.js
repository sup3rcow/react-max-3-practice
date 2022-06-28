import React, { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersListHandler] = useState([]);
  const onAddUserHandler = (user) => {
    setUsersListHandler((prevState) => [user, ...prevState]);
  };
  return (
    /* <React.Fragment> ili <Fragment> ili <> ili naš custom <Wrapper> */
    <Fragment>
      <AddUser onAddUser={onAddUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </Fragment>
  );
}

export default App;

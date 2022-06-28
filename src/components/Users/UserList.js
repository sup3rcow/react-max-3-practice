import React from "react";
import Card from "../UI/Card";
import style from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={style.users}>
      <ul>
        {props.users.map((x) => (
          <li key={x.id}>
            {x.user} ({x.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

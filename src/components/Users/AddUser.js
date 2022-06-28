import style from "./AddUser.module.css";
import Card from "../UI/Card";
import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState(null);

  const addUserHandler = (e) => {
    e.preventDefault();
    const [enteredUsername, enteredAge] = [
      nameInputRef.current.value,
      ageInputRef.current.value,
    ];
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Input invalid",
        message: "please enter valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Age invalid", message: "age must be greater than 0" });
      return;
    }
    setError(null);

    props.onAddUser({
      user: enteredUsername,
      age: enteredAge,
      id: Math.random(),
    });
    // setEnteredUsername("");
    // setEnteredAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const usernameChangeHandler = (e) => {
  //   setEnteredUsername(e.target.value);
  // };
  // const ageChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  // };
  const errorHandler = (e) => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={style.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

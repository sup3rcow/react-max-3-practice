import React from "react";
import Button from "./Button";
import Card from "./Card";
import style from "./ErrorModal.module.css";
import ReactDom from "react-dom"; // ReactDom proizvoljan naziv

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  const onConfirm = (e) => {
    props.onConfirm();
  };
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onConfirm={onConfirm}></Backdrop>,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={onConfirm}
        ></ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;

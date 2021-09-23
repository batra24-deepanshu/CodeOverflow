import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./AllComment.module.css";

import db from "./firebase";
import CommentView from "./CommentView";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  const [getComment, setComment] = useState([]);
  useEffect(()=>{
    db.collection(props.postId).onSnapshot((snapshot) => {
      setComment(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  },[])
  

  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>Comments</h2>
      </header>
      <div className={classes.scroll}>
        {getComment.map(({ id, data: { email, comment } }) => (
          
          <CommentView key={id} email={email} comment={comment} />
        ))}
      </div>

      <footer className={classes.actions}>
        <Button onClick={props.onClose}>Close</Button>
      </footer>
    </Card>
  );
};

const AllComment = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} postId={props.postId} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default AllComment;

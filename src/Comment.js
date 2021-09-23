import React,{useState} from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
// import Button from './Button';
import classes from './Comment.module.css';


const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};


const ModalOverlay = (props) => {
  const [comment,setComment]=useState('');
  const commentHandler=(event)=>{
    setComment(event.target.value);
  }
  const postComment=()=>{
    props.post(comment)
  }
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
        
      </header>
      <div className={classes.content}>
        <textarea onChange={commentHandler} value={comment} className={classes.textarea}/>
      </div>
    
      <footer className={classes.actions}>
        <button onClick={postComment}>Post</button>
        {/* <Button onClick={props.onConfirm}>Cancel</Button> */}
      </footer>
    </Card>
  );
};

const Comment = (props) => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          post={props.post}
          title={props.title}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default Comment;
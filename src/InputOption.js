import React, { useState } from "react";
import "./InputOption.css";
import Comment from "./Comment";
import db from "./firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import AllComment from "./AllComments";

function InputOption({ title, Icon, color, postId }) {
  const [modal, setmodal] = useState(false);
  const [commentWindow,setCommentWindow]=useState(false);
  const user = useSelector(selectUser);
  const modalhandler = () => {
    if (title === "Comment") {
      setmodal(true);
    }
    if(title==="View Comments"){
        setCommentWindow(true);
    }
    
  };
  const closeModal = () => {
    setmodal(false);
  };
  const closeCommentWindow=()=>{
      setCommentWindow(false)
  }
  const savePost = (comment) => {
    db.collection(postId).add({
     
          email: user.email,
          comment: comment,
    });
    setmodal(false)
  };
  return (
    <React.Fragment>
      {modal && (
        <Comment
          onConfirm={closeModal}
          post={savePost}
          title="Enter Your View !"
        />
      )}
      {commentWindow && (
          <AllComment onClose={closeCommentWindow} postId={postId} />
      )}
      
      <div className="inputOption" onClick={modalhandler}>
        <Icon className="icon" style={{ color: color }} />
        <h4>{title}</h4>
      </div>
    </React.Fragment>
  );
}

export default InputOption;

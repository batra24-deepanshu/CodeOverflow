import { Avatar } from "@mui/material";
import React from "react";
// import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import "./Post.css";
import ChatIcon from "@mui/icons-material/Chat";
import InputOption from "./InputOption";
// import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
function Post({ postId, name, description, message, photoUrl, timestamp }) {
  
  // function convertTimestamp(timestamp) {
  //   let date = timestamp.toDate();
  //   let mm = date.getMonth();
  //   let dd = date.getDate();
  //   let yyyy = date.getFullYear();

  //   date = mm + "/" + dd + "/" + yyyy;
  //   return date;
  // }

  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p> {description}</p>
          {/* <p>{convertTimestamp(timestamp)}</p> */}
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        {/* <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray"/> */}
        <InputOption
          Icon={ChatIcon}
          postId={postId}
          title="Comment"
          color="gray"
        />
        <InputOption
          Icon={VisibilityIcon}
          title="View Comments"
          postId={postId}
          color="gray"
        />
      </div>
    </div>
  );
}

export default Post;

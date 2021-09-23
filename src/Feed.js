import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
// import InputOption from "./InputOption";
// import ImageIcon from "@mui/icons-material/Image";
// import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
// import EventNoteIcon from "@mui/icons-material/EventNote";
// import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import db from './firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Feed() {
  const [input, setInput] = useState("");

  const [posts, setPost] = useState([]);
  const user=useSelector(selectUser)
 
  useEffect(()=>{
          db.collection('posts').onSnapshot(snapshot=>{
              setPost(snapshot.docs.map(doc=>(
                 {
                     id: doc.id,
                     data : doc.data()

                 }
          )))
          })
  },[])
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name:user.displayName ,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl||'',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      
    });
    setInput("")
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <textarea

              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        {/* <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="70B5F9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="E6A33E" />
          <InputOption title="Event" Icon={EventNoteIcon} color="C0CBCD" />
          <InputOption
            title="Write Article"
            Icon={CalendarViewDayIcon}
            color="7FC15E"
          />
        </div> */}
      </div>
      
      {posts.map(({ id, data: { name, description, message, photoUrl,timestamp } }) => (
 
        <Post
          key={id}
          postId={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
          timestamp={timestamp}
        />
        
      ))}
    </div>
  );
}

export default Feed;

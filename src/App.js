import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Feed from "./Feed";
import { login, logout, selectUser } from "./features/userSlice";
import Header from "./Header";
import SideBar from "./SideBar";
import Login from "./Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import Widgets from "./Widgets";
import { Route, Switch } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            {!user ? (
              <Login />
            ) : (
              <div className="app__Body">
                <SideBar />
                <Feed />
                <Widgets />
              </div>
            )}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

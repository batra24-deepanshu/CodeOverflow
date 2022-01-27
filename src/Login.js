import React,{useState} from 'react'
import { login } from './features/userSlice';
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import './Login.css'
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [profilePic,setProfilePic]=useState("");
    const dispatch = useDispatch()

    const register=()=>{
        if(!name){
            return alert("Please  enter a Full Name!")
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                    displayName : name,
                    photoURL :profilePic
            })
            .then(()=>{
                    dispatch(login({
                        email :userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:name,
                        photoURL:profilePic
                    }))
            })
        }).catch(error=>{
            alert(error)
        })
    }
    const loginToApp=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password).then(userAuth=>{
            dispatch(login({
                    email :userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName:name,
                        profileUrl : userAuth.user.photoURL,
            }))
        }).catch(error=>{
            alert(error )
        })
    }
    return (
        <div className="login">
            <img src="https://www.codetogether.com/wp-content/uploads/2020/02/codetogether-full-logo.png" alt=""/>
            <form>
                <p>Full Name (required if Registering)</p>
                <input  value={name} onChange={e=>setName(e.target.value)} type="text"/>
                <p>Profile Picture</p>
                <input value={profilePic} onChange={e=>setProfilePic(e.target.value)} type="text"/>
                <p>Email</p>
                <input  value={email} onChange={e=>setEmail(e.target.value)} type="text"/>
                <p>Password</p>
                <input  value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
                <button type="submit" onClick={loginToApp}>Sign in</button>
            </form>

            <p>Not a member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>

        </div>
    )
}

export default Login


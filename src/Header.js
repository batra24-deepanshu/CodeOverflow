import React from 'react'
import './Header.css'

import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home'; 

import {useDispatch} from 'react-redux'
import { auth } from './firebase';
import { logout } from './features/userSlice';
import {useHistory} from 'react-router-dom'

function Header() {
    const dispatch=useDispatch()
    const history=useHistory();
    const logoutApp=()=>{
            dispatch(logout());
            auth.signOut();
    }
    
    const movetoMain=()=>{
        history.push('/')
}

    return (
        <div className="header">
           
            <div className="header__left">
                <img src="https://www.codetogether.com/wp-content/uploads/2020/02/codetogether-full-logo.png" alt=""/>

                {/* <div className="header__search">
                    <SearchIcon  />
                    <input type="text" placeholder="Search..." />
                </div> */}
            </div>
            <div className="header__right">
                <HeaderOption  title="Community" Icon={HomeIcon} onClick={movetoMain} />
              

                <HeaderOption onClick={logoutApp} title="me" avatar="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png"/> 
            </div>
        </div>
    )
}

export default Header

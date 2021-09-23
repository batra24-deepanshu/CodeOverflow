import React from 'react'
import './Header.css'
// import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home'; 
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import ChatIcon from '@mui/icons-material/Chat';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CodeIcon from '@mui/icons-material/Code';
import {useDispatch} from 'react-redux'
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {
    const dispatch=useDispatch()
 
    const logoutApp=()=>{
            dispatch(logout());
            auth.signOut();
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
                <HeaderOption  title="Community" Icon={HomeIcon} />
                <HeaderOption  title="About Us" Icon={PermIdentityIcon} />
                <HeaderOption  title="Contest" Icon={CodeIcon} />
                {/* <HeaderOption title="Message Me" Icon={SupervisorAccountIcon} />
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
                <HeaderOption title="Messaging" Icon={ChatIcon}/>
                <HeaderOption title="Notifications" Icon={NotificationsIcon}/>*/}
                <HeaderOption onClick={logoutApp} title="me" avatar="https://img.icons8.com/ios-filled/50/000000/user-male-circle.png"/> 
            </div>
        </div>
    )
}

export default Header

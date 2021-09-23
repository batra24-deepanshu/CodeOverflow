import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './SideBar.css'
function SideBar() {
 const user=useSelector(selectUser)
//     const recentItem=(topics)=>(
//         <div className="sidebar__recentItem">
//             {/* <span className="sidebar__hash">   #   </span> */}
//                 <p>{topics}</p>
      
//         </div>
//     )

    
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" alt=""/>
                    <Avatar className="sidebar__avatar" src={user.photoUrl}>{
                    user.email[0].toUpperCase()}</Avatar>
                    <h2>{user.displayName}</h2>
                    <h4>{user.email}</h4>
            </div>
            {/* <div className="sidebar__stats">
                    <div className="sidebar__stat">
                            <p>No. of Posts </p>
                            <p className="sidebar__statNumber">2,534</p>
                    </div>
                     <div className="sidebar__stat">
                            <p>Views on Post </p>
                            <p className="sidebar__statNumber">2,438</p>
                    </div> 
            </div> */}
            {/* <div className="sidebar__bottom">
                    
                    {recentItem("Main Feed")}
                    {recentItem("Your Activity")}
                    {recentItem('Software Engineering')}
                    {recentItem('Software Design')}
                    {recentItem('Software Developer ')} 

            </div> */}
        </div>
    )
}

export default SideBar

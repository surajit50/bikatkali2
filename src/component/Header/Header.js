import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Header/Header.css';
function Header() {
  return (
    <div className='header'>
        <div className='header__leftOption'>
            {/* searchOption */}
            <SearchIcon />
          
        </div>
       
        
        <div className='header__rightOption'>
 {/*NotificationIcon*/}
 <NotificationsIcon fontSize="large" color="success"/>
        {/*Avatar */}
        <AccountCircleIcon  fontSize="large" color="info"/>

        </div>
       

        
      </div>
  )
}

export default Header
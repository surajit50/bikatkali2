import React from "react";
import '../SideNavbar/SideNavbar.css';


import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import {SidebarData} from '../SideNavbarOption/SidebarData';

import {NavLink } from "react-router-dom";

function SideNavbar() {
 
  return (
    <div className='sideNavbar'>
        
    <div className='sideNavbar___logo'><PeopleAltIcon /></div>
        {/*User details  <div className="sideNavbar__header"><PersonIcon /> Admin</div>  }*/}
    

    <div className="sideNavbar__option">
   
    
      {
        SidebarData.map((val, key) => {
         
          return (
            
            <li key={key}>
              <NavLink  to={val.path} className="mlink" >
            <div className='sideNavbar__option__icon'>{val.icon}</div>
            <div className='sideNavbar__option__title'>{val.title} </div>
            </NavLink >
        </li>  



        )
      }

      
    )}

    
      
        
    
          
       
        

    </div>

   
 
  </div>
  )
  
}

export default SideNavbar;
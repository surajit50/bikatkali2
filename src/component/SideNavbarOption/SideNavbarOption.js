import React from 'react'
import '../SideNavbarOption/SideNavbarOption.css';

function SideNavbarOption({text, Icon}) {
  return (
    <div className='sideNavbarOption'>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SideNavbarOption
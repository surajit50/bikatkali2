import React from 'react';
import '../SideNavbar/SideNavbar.css';
import PersonIcon from '@mui/icons-material/Person';
import SideNavbarOption from '../SideNavbarOption/SideNavbarOption';
import PieChartIcon from '@mui/icons-material/PieChart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import CollectionsIcon from '@mui/icons-material/Collections';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ReportIcon from '@mui/icons-material/Report';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
function SideNavbar() {
  return (
    <div className='sideNavbar'>
        
      <div className='sideNavbar___logo'><PeopleAltIcon /></div>
        {/*User details*/}
    <div className="sideNavbar__header"><PersonIcon /> Admin</div>

    <SideNavbarOption Icon={PieChartIcon} text='Dashboard'/>
    <SideNavbarOption Icon={PersonOutlineIcon} text='Users'/>
    <SideNavbarOption Icon={WebAssetIcon} text='Asset Entry'/>
    <SideNavbarOption Icon={CollectionsIcon} text='Collection'/>
    <SideNavbarOption Icon={ExpandCircleDownIcon} text='Expenditure'/>
    <SideNavbarOption Icon={ReportIcon}  text='Report'/>
   
   
        {/*SideNavbarOption*/}
        {/*SideNavbarOption*/}
        {/*SideNavbarOption*/}
        {/*SideNavbarOption*/}
        {/*SideNavbarOption*/}
        {/*SideNavbarOption*/}
        
        </div>
  )
}

export default SideNavbar;
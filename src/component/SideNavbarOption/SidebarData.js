import PieChartIcon from '@mui/icons-material/PieChart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import CollectionsIcon from '@mui/icons-material/Collections';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ReportIcon from '@mui/icons-material/Report';

export const SidebarData = [
    {
      title: 'Dashboard',
      path: '/',
      icon: <PieChartIcon />
      
    },
    {
      title: 'Users',
      path: '/users',
      icon: <PersonOutlineIcon />
    },
    {
      title: 'Asset Entry',
      path: '/assetEntry',
      icon: <WebAssetIcon />
    },
    {
      title: 'Bank Entry',
      path: '/bankEntry',
      icon: <WebAssetIcon />
    },
    {
      title: 'Cheque Entry',
      path: '/chequeEntry',
      icon: <WebAssetIcon />
    },
    
    {
      title: 'Collection',
      path: '/collection',
      icon: <CollectionsIcon />
    },
    {
      title: 'Expenditure',
      path: '/expenditure', 
      icon: <ExpandCircleDownIcon />
    },
    {
      title: 'Collection Report',
      path: '/collectionreport',
      icon: <ReportIcon />, 
    },
    {
      title: 'Expenditure Report',
      path: '/expenditurereport',
      icon: <ReportIcon />, 
    },
    {
      title: 'Bank Balance',
      path: '/bankbalance',
      icon: <ReportIcon />, 
    },
    {
      title: 'Financial Report',
      path: '/fbreport',
      icon: <ReportIcon />, 
    }
  ];
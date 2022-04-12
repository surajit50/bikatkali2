import React from 'react'
import Header from '../Header/Header';
import '../Dashboard/Dashboard.css';
import { Routes, Route} from "react-router-dom";
import AssetEntry from '../../pages/AssetEntry';
import Collection from '../../pages/Collection';
import Expenditure from '../../pages/Expenditure';
import  Users from '../../pages/Users';
function Dashboard() {
  return (
    <div className='dashboard'>
        <Header />
        <div className='dashboard__body'>
        <Routes>
        <Route path='/' />
        <Route path='/assetEntry' element={  <AssetEntry />}/>
        <Route path='/collection' element={ <Collection />}/>
        <Route path='/expenditure' element={<Expenditure />}/>
        <Route path='/users' element={ <Users />}/>
        </Routes>
        </div>


        
        

    </div>
  )
}

export default Dashboard
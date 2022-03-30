import React from 'react'
import Header from '../Header/Header';
import '../Dashboard/Dashboard.css';
function Dashboard() {
  return (
    <div className='dashboard'>
        <Header />
        <div className='dashboard__body'>
          i am body
        </div>

    </div>
  )
}

export default Dashboard
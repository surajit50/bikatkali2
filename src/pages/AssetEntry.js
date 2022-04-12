import React from 'react'
import '../pages/pagesStyle.css';
function AssetEntry() {
  return (
    <div className='assetEntry'>
      <div className='assetEntry__content'>
      <div className="assetEntry__header">Asset Entry</div>
      <div className='assetEntry__body'>
        <div className='assetEntry__for_select'>
          <label>Asset Type</label>
        <select>
          <option value="">--select--</option>
          <option value="gold">Gold</option>
          <option value="silver">Silver</option>
        </select>

        </div>
      </div>

      </div>
      </div>
  )
}

export default AssetEntry
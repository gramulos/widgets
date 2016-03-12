import React from 'react'
import siteLogo from '../static/dcmnLogo.jpg'

const StatusBar = () => {
  return (
    <div className='row topNavigation'>
      <div className='topNavItem noMargin'>
        <img src={siteLogo} />
      </div>
      <div className='topNavItemContainer'>
        <div className='topNavItem'>
          <i className='material-icons'>autorenew</i>
          <span>Updated 26.05.15 - 13.45</span>
        </div>
        <div className='topNavItem' style={{width: '187.266px'}}>
          <i className='material-icons'>euro_symbol</i>
            <span>Budget spent</span>
            <div className='progress'>
              <div className='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: '60%'}}>
                <span className='sr-only'>60% Complete</span>
              </div>
          </div>
        </div>
      </div>
      <div className='topNavItem pull-right noMargin'>
        <span>Show</span>
        <div className='dropdownList'>
          <i className='material-icons dropdownListArrow'>keyboard_arrow_down</i>
          <select>
            <option>website.de</option>
          </select>
        </div>
        <div className='dropdownList'>
          <i className='material-icons dropdownListArrow'>keyboard_arrow_down</i>
          <select>
            <option>campaign</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default StatusBar

import React from 'react'
import './DCMNWidgets.scss'
import siteLogo from '../../static/dcmnLogo.jpg'

export class DCMNWidgets extends React.Component {
  render () {
    return (
      <div className='dashboardContent'>
        <div className='row topNavigation'>
          <div className='topNavItem noMargin'>
            <img src={siteLogo} />
          </div>
          <div className='topNavItem'>
            <i className='material-icons'>autorenew</i>
            <span>Updated 26.05.15 - 13.45</span>
          </div>
          <div className='topNavItem' style={{width: '187.266px'}}>
            <i className='glyphicon glyphicon-euro'></i>
              <span>Budget spent</span>
              <div className='progress'>
                <div className='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: '60%'}}>
                  <span className='sr-only'>60% Complete</span>
                </div>
            </div>
          </div>
          <div className='topNavItem pull-right'>
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
        <div className='dashboardComponent'>
          <div className='row noMargin dashboardComponentHeader'>
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
              <h1>OVERALL</h1>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 dashboardComponentTools'>
              Date range
              <div className='dateTimePicker'>
                <i className='material-icons'>date_range</i>
                <input type='text' className='roudedInputStyle' value='05.05.15-12.05.15'/>
              </div>
              <div className='roudedInputStyle'>
                <i className='material-icons'>add</i>
                Add widget
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DCMNWidgets

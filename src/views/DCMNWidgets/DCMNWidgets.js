import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as squareWidgetLoader } from '../../redux/modules/squareWidget'
import siteLogo from '../../static/dcmnLogo.jpg'
import SquareWidget from '../../components/SquareWidget'
import SquareWidgetItem from '../../models/square-widget'

import './DCMNWidgets.scss'

export class DCMNWidgets extends Component {
  componentWillMount () {
    const { loadSquareWidgets } = this.props
    loadSquareWidgets()
  }

  generateDefaultWidgets () {
    const { squareWidget } = this.props
    const widgetList = squareWidget.map((widget, key) => {
      const widgetItem = SquareWidgetItem.create({...widget})
      return <SquareWidget {...widgetItem} key={key}/>
    })
    return <div className='row'>{widgetList}</div>
  }

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
            <i className='material-icons'>euro_symbol</i>
              <span>Budget spent</span>
              <div className='progress'>
                <div className='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style={{width: '60%'}}>
                  <span className='sr-only'>60% Complete</span>
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
        <div className='dashboardComponent'>
          <div className='row noMargin dashboardComponentHeader'>
            <div className='col-lg-6 col-md-3 col-sm-3 col-xs-12 noPadding'>
              <h1>OVERALL</h1>
            </div>
            <div className='col-lg-6 col-md-9 col-sm-9 col-xs-12 noPadding dashboardComponentTools'>
              <div className='gBtn btnGreen pull-right' style={{marginRight: '0 !important'}}>
                <i className='material-icons'>add</i>
                Add widget
              </div>
              <div className='dateTimePicker pull-right' style={{marginRight: '-10px'}}>
                <i className='material-icons'>date_range</i>
                <input type='text' className='roudedInputStyle' value='05.05.15-12.05.15'/>
              </div>
              <span className='inputHeader pull-right'>Date range</span>
            </div>
          </div>
        </div>
        {this.generateDefaultWidgets()}
      </div>
    )
  }
}

DCMNWidgets.propTypes = {
  loadSquareWidgets: PropTypes.func.isRequired,
  squareWidget: PropTypes.array
}

const mapStateToProps = ({squareWidget}) => ({
  squareWidget
})

export default connect(mapStateToProps, squareWidgetLoader)(DCMNWidgets)

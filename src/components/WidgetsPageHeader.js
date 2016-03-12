import React from 'react'

const WidgetsPageHeader = () => {
  return (
    <div className='dashboardComponent'>
      <div className='row noMargin dashboardComponentHeader'>
        <div className='col-lg-6 col-md-3 col-sm-3 col-xs-12 noPadding'>
          <h1>OVERALL</h1>
        </div>
        <div className='col-lg-6 col-md-9 col-sm-9 col-xs-12 noPadding dashboardComponentTools'>
          <div className='gBtn btnGreen pull-right' style={{marginRight: '0 !important'}} data-toggle='modal' data-target='#myModal'>
            <i className='material-icons'>add</i>
            Add widget
          </div>
          <div className='inlineInput'>
            <div className='dateTimePicker pull-right' style={{marginRight: '-10px'}}>
              <i className='material-icons'>date_range</i>
              <input type='text' className='roudedInputStyle' value='05.05.15-12.05.15'/>
            </div>
            <span className='inputHeader pull-right'>Date range</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WidgetsPageHeader

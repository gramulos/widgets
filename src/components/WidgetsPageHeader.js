import React from 'react'

const WidgetsPageHeader = () => {
  return (
    <div className='dashboardComponent'>
      <div className='row noMargin dashboardComponentHeader'>
        <div className='pageTitle'>OVERALL</div>
        <div className='dashboardComponentTools pull-right'>
          <div className='gBtn btnGreen pull-right' style={{marginRight: '0 !important', marginLeft: '0 !important'}} data-toggle='modal' data-target='#myModal'>
            <i className='material-icons'>add</i>
            Add widget
          </div>
          <div className='inlineInput'>
            <div className='dateTimePicker pull-right'>
              <i className='material-icons'>date_range</i>
              <input type='text' className='roudedInputStyle' placeholder='05.05.15-12.05.15'/>
            </div>
            <span className='inputHeader pull-right'>Date range</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WidgetsPageHeader

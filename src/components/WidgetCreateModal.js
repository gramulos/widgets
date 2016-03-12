import React from 'react'
import TextWidgetItem from '../models/text-widget'

const WidgetCreateModal = ({fields, createWidget}) => {
  const { widgetText } = fields
  return (
    <div className='modal fade' id='myModal' role='dialog'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type='button' className='close' data-dismiss='modal'>&times;</button>
            <h4 className='modal-title'>Create new widget</h4>
          </div>
          <div className='modal-body'>
            <div className='form-group' id='widgetText'>
              <label className='control-label'>What's on your mind?</label>
              <input type='text' className='form-control'
                     aria-describedby='inputSuccess2Status'
                     {...widgetText}
                     onBlur={() => {
                       if (!widgetText.value) {
                         const inputElement = document.getElementById('widgetText')
                         if (inputElement.className.indexOf('has-error') > 0) {
                           inputElement.className = 'form-group'
                         } else {
                           inputElement.className += ' has-error'
                         }
                       }
                     }}/>
            </div>
          </div>
          <div className='modal-footer'>
            <div className='gBtn btnGreen noMargin pull-right' data-dismiss='modal' onClick={() => {
              const newWidget = TextWidgetItem.create({ text: widgetText.value })
              createWidget(newWidget)
              widgetText.onChange('')
              const myModal = document.getElementById('myModal')
              if (myModal.className.indexOf('has-error') > 0) {
                myModal.className = 'modal fade'
              }
            }}>Add</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WidgetCreateModal

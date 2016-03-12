import React from 'react'

const WidgetCreateModal = () => {
  return (
    <div className='modal fade' id='myModal' role='dialog'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <button type='button' className='close' data-dismiss='modal'>&times;</button>
            <h4 className='modal-title'>Create new widget</h4>
          </div>
          <div className='modal-body'>
            <p>Some text in the modal.</p>
          </div>
          <div className='modal-footer'>
            <div className='gBtn btnGreen noMargin pull-right' data-dismiss='modal'>Add</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WidgetCreateModal

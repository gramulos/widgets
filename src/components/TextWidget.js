import React from 'react'

const TextWidget = ({ text, onDelete, index }) => {
  return (
    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
      <div className='squareWidget textWidget'>
        <div className='squareWidgetHeader'>
          <span>Header</span>
          <i className='material-icons pull-right clickable' onClick={() => onDelete(index)}>delete</i>
        </div>
        <div className='squareWidgetBody'>
          {text}
        </div>
      </div>
    </div>
  )
}

export default TextWidget

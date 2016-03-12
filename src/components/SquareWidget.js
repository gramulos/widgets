import React from 'react'

const SquareWidget = ({header, counter, iconBefore, iconAfter, colorClassName}) => {
  return (
    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
      <div className={'squareWidget ' + colorClassName}>
        <div className='squareWidgetHeader'>
          <i className='material-icons pull-right'>settings</i>
          <i className='material-icons pull-right'>exit_to_app</i>
        </div>
        <div className='squareWidgetBody'>
          <i className='material-icons'>{iconBefore}</i>
          <span>{counter}</span>
          <i className='material-icons'>{iconAfter}</i>
          <h5>{header}</h5>
        </div>
      </div>
    </div>
  )
}

export default SquareWidget

import React from 'react'
import Style from './modal.scss'

const Modal = ({header, body, footer}) => {
  return (
    <div className={Style.GModal}>
      <div className={Style.GModalContainer}>
        <div className={Style.GModalHeader}>{header}<i className='material-icons'>close</i></div>
      </div>
      <div className={Style.GModalBody}>{body}</div>
      <div className={Style.GModalFooter}>{footer}</div>
    </div>
  )
}

export default Modal

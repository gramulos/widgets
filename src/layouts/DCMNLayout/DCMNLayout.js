import React, { PropTypes } from 'react'
import LeftNavigation from '../../components/layout/LeftNavigation'
import '../../styles/dcmn.scss'

function DCMNLayout ({ children }) {
  return (
    <div className='row dashboardMain'>
      <LeftNavigation />
      <div className='dashboardContainer' id='dashboardContainer'>
        {children}
      </div>
    </div>
  )
}

DCMNLayout.propTypes = {
  children: PropTypes.element
}

export default DCMNLayout

import React, { PropTypes } from 'react'
import '../../styles/widget.scss'

function WidgetLayout ({ children }) {
  return (
    <div>
        {children}
    </div>
  )
}

WidgetLayout.propTypes = {
  children: PropTypes.element
}

export default WidgetLayout

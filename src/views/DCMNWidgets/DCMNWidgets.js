import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as squareWidgetLoader } from '../../redux/modules/squareWidget'
import SquareWidget from '../../components/SquareWidget'
import SquareWidgetItem from '../../models/square-widget'
import WidgetCreateModal from '../../components/WidgetCreateModal'
import StatusBar from '../../components/StatusBar'
import WidgetsPageHeader from '../../components/WidgetsPageHeader'

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
        <StatusBar />
        <WidgetsPageHeader />
        {this.generateDefaultWidgets()}
        <WidgetCreateModal />
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

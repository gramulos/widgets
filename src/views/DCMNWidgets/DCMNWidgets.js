import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadSquareWidgets } from '../../redux/modules/squareWidget'
import SquareWidget from '../../components/SquareWidget'
import SquareWidgetItem from '../../models/square-widget'
import WidgetCreateModal from '../../components/WidgetCreateModal'
import StatusBar from '../../components/StatusBar'
import WidgetsPageHeader from '../../components/WidgetsPageHeader'
import { addWidget, getWidgets, deleteWidget } from '../../redux/modules/textWidgets'
import TextWidget from '../../components/TextWidget'
import TextWidgetItem from '../../models/text-widget'

import './DCMNWidgets.scss'

export const fields = ['widgetText']
const validate = values => {
  const errors = {}
  if (!values.widgetText) {
    errors.widgetText = 'Required'
  }
  return errors
}

export class DCMNWidgets extends Component {
  componentWillMount () {
    const { loadSquareWidgets, getWidgets } = this.props
    getWidgets()
    loadSquareWidgets()
  }

  generateDefaultWidgets () {
    const { squareWidget } = this.props
    if (squareWidget) {
      const widgetList = squareWidget.map((widget, key) => {
        const widgetItem = SquareWidgetItem.create({...widget})
        return <SquareWidget {...widgetItem} key={key}/>
      })
      return <div className='row'>{widgetList}</div>
    }
  }

  generateTextWidgets () {
    const { textWidgets, deleteWidget } = this.props
    if (textWidgets) {
      const widgetList = textWidgets.map((widget, key) => {
        const widgetItem = TextWidgetItem.create({...widget})
        return <TextWidget {...widgetItem} key={key} onDelete={deleteWidget} index={key}/>
      })
      return <div className='row'>{widgetList}</div>
    }
  }

  render () {
    const { fields, addWidget } = this.props
    return (
      <div className='dashboardContent'>
        <StatusBar />
        <WidgetsPageHeader />
        {this.generateDefaultWidgets()}
        {this.generateTextWidgets()}
        <WidgetCreateModal fields={fields} createWidget={addWidget}/>
      </div>
    )
  }
}

DCMNWidgets.propTypes = {
  fields: PropTypes.object.isRequired,
  addWidget: PropTypes.func.isRequired,
  loadSquareWidgets: PropTypes.func.isRequired,
  getWidgets: PropTypes.func.isRequired,
  deleteWidget: PropTypes.func.isRequired,
  squareWidget: PropTypes.array,
  textWidgets: PropTypes.array
}

const mapStateToProps = ({squareWidget, textWidgets}) => ({
  squareWidget,
  textWidgets: textWidgets.textWidgets
})

function mapDispatchToProps (dispatch) {
  return bindActionCreators({loadSquareWidgets, addWidget, getWidgets, deleteWidget}, dispatch)
}

const DCMNWidgetsForm = reduxForm({
  form: 'widgetForm',
  fields,
  validate
})(DCMNWidgets)

export default connect(mapStateToProps, mapDispatchToProps)(DCMNWidgetsForm)

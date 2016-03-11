import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions as counterActions } from '../../redux/modules/counter'
import './WidgetView.scss'

const mapStateToProps = (state) => ({
  counter: state.counter
})
export class WidgetView extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    doubleAsync: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
  };

  render () {
    return (
      <div className='text-center'>
        <h1>Welcome to widgets</h1>
        <div className='form-inline'>
          <div className='form-group'>
            <label>Widget text</label>
            <input type='text' className='form-control' id='widgetText' placeholder='I like widgets' />
          </div>
          <button type='button' className='btn btn-primary'>Create</button>
        </div>
        <div className='container widget-box'>
          <div className='widget row'>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content '>23.07.1990<span className='glyphicon glyphicon-remove'></span></div>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum iorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum horem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hs simply dummy text of the printing and typesetting industry. LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum iorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum horem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hs simply dummy text of the printing and typesetting industry. LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum iorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum horem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hs simply dummy text of the printing and typesetting industry. LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
            <div className='widget-category list-group'>
               <div className='widget-item list-group-item widget-content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. LLorem Ipsum iorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum horem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hs simply dummy text of the printing and typesetting industry. LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but a</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(WidgetView)

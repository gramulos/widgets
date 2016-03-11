import React from 'react'
import { bindActionCreators } from 'redux'
import {
  renderIntoDocument,
  createRenderer,
  findRenderedDOMComponentWithTag,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils'

import sinon from 'sinon'
import chai from 'chai'

const expect = chai.expect
chai.should()

import { HomeView } from '../../src/views/HomeView/HomeView'

function shallowRender (component) {
  const renderer = createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props = {}) {
  return renderIntoDocument(<HomeView {...props} />)
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<HomeView {...props} />)
}

describe('(View) Home', function () {
  let _component, _rendered, _props, _spies

  beforeEach(function () {
    _spies = {}
    _props = {
      counter: 0,
      ...bindActionCreators({
        doubleAsync: (_spies.doubleAsync = sinon.spy()),
        increment: (_spies.increment = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }

    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  })

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div')
  })

  it('Should include an <h1> with welcome text.', function () {
    const h1 = findRenderedDOMComponentWithTag(_rendered, 'h1')

    expect(h1).to.exist
    expect(h1.textContent).to.match(/Welcome to the React Redux Starter Kit/)
  })

  it('Should render with an <h2> that includes Sample Counter text.', function () {
    const h2 = findRenderedDOMComponentWithTag(_rendered, 'h2')

    expect(h2).to.exist
    expect(h2.textContent).to.match(/Sample Counter/)
  })

  it('Should render props.counter at the end of the sample counter <h2>.', function () {
    const h2 = findRenderedDOMComponentWithTag(
      renderWithProps({ ..._props, counter: 5 }), 'h2'
    )

    expect(h2).to.exist
    expect(h2.textContent).to.match(/5$/)
  })

  describe('An increment button...', function () {
    let _btn

    beforeEach(() => {
      _btn = scryRenderedDOMComponentsWithTag(_rendered, 'button')
        .filter(a => /Increment/.test(a.textContent))[0]
    })

    it('should be rendered.', function () {
      expect(_btn).to.exist
    })

    it('should dispatch an action when clicked.', function () {
      _spies.dispatch.should.have.not.been.called
      Simulate.click(_btn)
      _spies.dispatch.should.have.been.called
    })
  })

  describe('A Double (Async) button...', function () {
    let _btn

    beforeEach(() => {
      _btn = scryRenderedDOMComponentsWithTag(_rendered, 'button')
        .filter(a => /Double/.test(a.textContent))[0]
    })

    it('should be rendered.', function () {
      expect(_btn).to.exist
    })

    it('should dispatch an action when clicked.', function () {
      _spies.dispatch.should.have.not.been.called
      Simulate.click(_btn)
      _spies.dispatch.should.have.been.called
    })
  })
})

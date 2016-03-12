import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_SQUARE_WIDGETS = 'LOAD_SQUARE_WIDGETS'

// ------------------------------------
// Actions
// ------------------------------------
export const loadSquareWidgets = createAction(LOAD_SQUARE_WIDGETS)

const SQUARE_WIDGETS = [
  {
    counter: '5,43',
    header: 'cost per visit',
    iconBefore: 'arrow_drop_up',
    iconAfter: 'euro_symbol',
    colorClassName: 'squareGreen'
  },
  {
    counter: '53',
    header: 'new users',
    iconBefore: 'arrow_drop_up',
    colorClassName: 'squareGray'
  },
  {
    counter: '21',
    header: 'conversion rate',
    iconBefore: 'remove',
    iconAfter: '%',
    colorClassName: 'squarePink'
  },
  {
    counter: '532',
    header: 'conversion rate',
    iconBefore: 'arrow_drop_up',
    colorClassName: 'squareOrange'
  }
]

export const squareWidgets = SQUARE_WIDGETS

export const actions = {
  loadSquareWidgets
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [LOAD_SQUARE_WIDGETS]: (state) => [...state]
}, squareWidgets)

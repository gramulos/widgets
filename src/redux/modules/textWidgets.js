// ------------------------------------
// Constants
// ------------------------------------
export const ADD_WIDGET = 'ADD_WIDGET'
export const GET_WIDGETS = 'GET_WIDGETS'
export const DELETE_WIDGET = 'DELETE_WIDGET'

// ------------------------------------
// Actions
// ------------------------------------
export const addWidget = (textWidget) => {
  return {
    type: ADD_WIDGET,
    payload: textWidget
  }
}

export const deleteWidget = (index) => {
  return {
    type: DELETE_WIDGET,
    payload: index
  }
}

export const getWidgets = () => {
  return {
    type: GET_WIDGETS
  }
}

export const actions = {
  addWidget,
  getWidgets,
  deleteWidget
}

const initialState = {
  textWidgets: [
    {text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
    {text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)'},
    {text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'}
  ]
}

// ------------------------------------
// Reducer
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_WIDGET]: (state, { payload }) => Object.assign({}, state, { textWidgets: [ ...state.textWidgets, payload ] }),
  [GET_WIDGETS]: (state) => { return state },
  [DELETE_WIDGET]: (state, { payload }) => Object.assign({}, state, { textWidgets: [...state.textWidgets.slice(0, payload), ...state.textWidgets.slice(payload + 1)] })
}

export default function registerAgentReducer (state, action) {
  state = state || initialState
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

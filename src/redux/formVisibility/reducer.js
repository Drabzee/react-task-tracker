import { TOGGLE_FORM_VISIBILITY } from './types'

const initialState = false;

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FORM_VISIBILITY:
      return !state;

    default: return state;
  }
}

export default reducer
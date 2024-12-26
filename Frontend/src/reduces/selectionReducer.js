import { SET_SELECTION } from '../action/selection-actions';

const initialState = {};

const selectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTION:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state;
  }
};

export default selectionReducer;

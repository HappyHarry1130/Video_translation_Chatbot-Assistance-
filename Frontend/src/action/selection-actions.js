export const SET_SELECTION = 'SET_SELECTION';

export const setSelection = (name, value) => ({
  type: SET_SELECTION,
  payload: { name, value },
});
import { TODO_CREATE, TODO_CHANGE_TEXT, TODO_CHANGE_TOGGLE } from 'action/editor';

const emptyState = {
  text: '',
  important: false,
  easy: false,
};

export function editor(state = emptyState, action) {
  switch (action.type) {
  case TODO_CREATE:
    return emptyState;
  case TODO_CHANGE_TEXT:
    return Object.assign({}, state, {text: action.text});
  case TODO_CHANGE_TOGGLE:
    return Object.assign({}, state, {[action.name]: action.value});
  default:
    return state;
  }
}

export function getCurrentTodoState(state) {
  return state;
}

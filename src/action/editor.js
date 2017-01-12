export const TODO_CREATE = 'TODO_CREATE';

export function create(todo) {
  return {
    type: TODO_CREATE,
    todo,
  };
}

export const TODO_CHANGE_TEXT = 'TODO_CHANGE_TEXT';

export function changeText(text) {
  return {
    type: TODO_CHANGE_TEXT,
    text,
  };
}

export const TODO_CHANGE_TOGGLE = 'TODO_CHANGE_TOGGLE';

export function toggle(name, value) {
  return {
    type: TODO_CHANGE_TOGGLE,
    name,
    value,
  };
}

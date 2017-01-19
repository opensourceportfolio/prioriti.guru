export const LOAD_DATA = 'LOAD_DATA';

export function loadData(state) {
  return {
    type: LOAD_DATA,
    state,
  };
}

export const TODO_CHANGE_COMPLETE = 'TODO_CHANGE_COMPLETE';

export function toggleCompleted(id, isCompleted) {
  return {
    type: TODO_CHANGE_COMPLETE,
    id,
    isCompleted,
  };
}

export const TODO_DELETE = 'TODO_DELETE';

export function deleteTodo(id) {
  return {
    type: TODO_DELETE,
    id,
  };
}

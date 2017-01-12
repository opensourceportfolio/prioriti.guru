import { TODO_CREATE } from 'action/editor';
import { LOAD_DATA } from 'action/todo';
import { v4 } from 'lib/uuid';

const emptyState = {
  all: [],
};

export function todos(state = emptyState, action) {

  switch (action.type) {
  case LOAD_DATA:
    return action.state.todos;
  case TODO_CREATE:
    const newTodos = state.all.slice(0);
    const newTodo = Object.assign({}, action.todo, {id: v4()});

    newTodos.push(newTodo);

    return { all: newTodos};
  default:
    return state;
  }
}

export function getTodos(state) {
  return state.all;
}

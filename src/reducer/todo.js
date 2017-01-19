import { TODO_CREATE } from 'action/editor';
import { LOAD_DATA, TODO_CHANGE_COMPLETE, TODO_DELETE } from 'action/todo';
import { v4 } from 'lib/uuid';

const emptyState = {
  all: {},
};

export default function todos(state = emptyState, action) {
  const newTodo = {};
  const newTodos = {};
  const {id, isCompleted} = action;

  switch (action.type) {
  case LOAD_DATA:
    return action.state.todos;
  case TODO_CREATE:
    Object.assign(newTodos, state.all);
    Object.assign(newTodo, action.todo, {id: v4(), isCompleted: false});

    newTodos[newTodo.id] = newTodo;

    return { all: newTodos};
  case TODO_CHANGE_COMPLETE:
    Object.assign(newTodos, state.all);
    Object.assign(newTodo, state.all[id]);

    newTodo.isCompleted = isCompleted;
    newTodos[id] = newTodo;

    return { all: newTodos };
  case TODO_DELETE:
    Object.assign(newTodos, state.all);
    Object.assign(newTodo, state.all[id]);

    newTodo.isDeleted = true;
    newTodos[id] = newTodo;

    return { all: newTodos };
  default:
    return state;
  }
}


export function getAllTodos(state) {
  return Object.keys(state.all).map((key) => state.all[key]);
}

export function getTodoType(todo) {
  const isImportant = todo.isImportant ? 1 : 0;
  const isEasy = todo.isEasy ? 2 : 0;

  return (isImportant + isEasy).toString();
}

export const ToDoType = {
  'none': 0,
  'important': 1,
  'easy': 2,
  'both': 3,
};

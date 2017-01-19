import { combineReducers } from 'lib/redux';
import { navigation } from 'reducer/navigation';
import { editor, getCurrentTodoState as getEditorState} from 'reducer/editor';
import todos, { getTodoType, getAllTodos as getAllTodosFromState } from 'reducer/todo';

export function getAllTodos(state) {
  return getAllTodosFromState(state.todos);
}

export function getTodos(type, state) {
  const allTodos = getAllTodos(state);

  return allTodos.filter((todo) => getTodoType(todo) === type);
}

export function getCurrentTodoState(state) {
  return getEditorState(state.editor);
}

const reducer = combineReducers({ navigation, editor, todos });

export default reducer;

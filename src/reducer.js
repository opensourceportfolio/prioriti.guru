import { combineReducers } from 'lib/redux';
import { navigation } from 'reducer/navigation';
import { editor, getCurrentTodoState as getEditorState} from 'reducer/editor';
import { todos, getTodos as getTodosFromState } from 'reducer/todo';

export function getTodos(state) {
  return getTodosFromState(state.todos);
}

export function getCurrentTodoState(state) {
  return getEditorState(state.editor);
}

const reducer = combineReducers({ navigation, editor, todos });

export default reducer;

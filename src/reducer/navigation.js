import { TOGGLE_DRAWER } from 'action/navigation';

export function navigation(state = {}, action) {
  switch (action.type) {
  case TOGGLE_DRAWER:
    return Object.assign({}, state, {openDrawer: !state.openDrawer});
  default:
    return state;
  }
}

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
  };
}

export function getDrawerState(state) {
  return state.navigation.openDrawer;
}

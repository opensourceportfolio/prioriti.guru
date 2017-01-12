export const LOAD_DATA = 'LOAD_DATA';

export function loadData(state) {
  return {
    type: LOAD_DATA,
    state,
  };
}

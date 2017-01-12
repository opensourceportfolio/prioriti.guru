import { createStore } from 'lib/redux';
import debounce from 'lib/debounce';
import { set, keys } from 'service/userSetting';
import reducer from 'reducer';

export default function configureStore(originalState) {
  const store = createStore(
    reducer,
    originalState
  );

  store.subscribe(debounce(() => {
    const state = store.getState();

    set(keys.settings, state);
  }, 1000));

  return store;
}

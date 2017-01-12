import React from 'lib/react';
import ReactDOM from 'lib/react-dom';
import { Provider } from 'lib/react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from 'app';
import configureStore from 'store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'css/index.css';
import { loadData } from 'action/todo';
import { get, keys } from 'service/userSetting';

injectTapEventPlugin();
const store = configureStore();

get(keys.settings).then((settings) => {
  store.dispatch(loadData(settings));
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app-prioriti')
);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

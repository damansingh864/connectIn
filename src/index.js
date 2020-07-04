import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from "styled-components";
import App from './App';
import theme from './theme/index.json'
import './index.css'
import store from './redux/store'

const RenderMain = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ThemeProvider>
)

ReactDOM.render(
  <RenderMain />, document.getElementById('root')
);


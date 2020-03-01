import React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {RootContainer} from './containers';
import {configureStore} from './modules';
import './style.css'

ReactDOM.render(
  <Provider store={configureStore()}>
    <RootContainer />
  </Provider>,
  document.getElementById('root')

)
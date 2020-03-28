import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer/index'

const store = createStore(reducer);


ReactDOM.render(<button>测试按钮</button>, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer/index';
import Editor from './modules/editor/index';
import { Provider } from 'react-redux';
import Preview from './modules/preview/index';
import './styles/app.less';

const store = createStore(reducer);

function App(props) {

    return <Provider store={store}>
        <>
            <Editor></Editor>
            <Preview></Preview>
        </>
    </Provider>

}


ReactDOM.render(<App></App>, document.getElementById('app'));
import {UnControlled as CodeMirror} from 'react-codemirror2'
import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/keymap/vim';
import 'codemirror/mode/markdown/markdown.js';
import { useDispatch } from 'react-redux';
import {changeContent} from '../editor/actions/index';
import EditorBottomBar from './components/bottombar';
import './index.less';

export default function Editor(props) {
    const dispatch = useDispatch();

    return <div className="editor-container">
            <CodeMirror
            value=''
            options={{
                mode: 'markdown',
                // lineNumbers: true,
                keyMap: 'vim'
                
            }}
            onChange = {(editor, data, value) => {
                // console.log(JSON.stringify(value));
                // console.log(value);
                // 发送action 到reducer
                dispatch(changeContent(value));
            }}/>
        <EditorBottomBar></EditorBottomBar>
    </div> 
}
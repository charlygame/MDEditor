import marked from 'marked';
import { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import React from 'react';
import PreviewBottomBar from './components/bottombar';
import './index.less'

export default function Preview(props) {

    const editorText = useSelector(state => state.editor.content);
    marked.setOptions({
        gfm: true,
        breaks: true
    })
    useEffect(() => {
        console.log(JSON.stringify(editorText));
        document.getElementById('preview').innerHTML= marked(editorText);
    }, [editorText])
    return <div className="preview-container">
         <div id="preview"></div>
         <PreviewBottomBar></PreviewBottomBar>
    </div>
       
}
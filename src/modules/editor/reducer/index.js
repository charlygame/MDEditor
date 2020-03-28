// 初始化数据
const initState = {
    content: ''
}
export default function editorReducer(state = initState, action) {

    switch(action.type) {
        case EDITOR_TEXT_CHANGE: 
            return {content: action.text}
        default: 
            return state;
    }
}
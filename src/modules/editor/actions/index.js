import {EDITOR_TEXT_CHANGE} from '../../../constants/actionTypes';
// 文本内容改变
export function changeContent(text) {
    return {
        type: EDITOR_TEXT_CHANGE,
        text
    }
}
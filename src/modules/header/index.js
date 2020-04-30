import React, {useState} from 'react'
import {MdArrowDropDown, MdArrowDropUp} from 'react-icons/md';

import './index.less'
/**
 * 顶部资源
 * @param {*} props 
 */
export default function Header(props) {

    let [modalVisible, setModalVisible] = useState(false);

    const onBtnClick = (event) => {
        setModalVisible(!modalVisible);
    }
    return <div className='editorHeader'>
        <input placeholder="请输入标题..." ></input>
        <div className="toggle-btn" onClick = {onBtnClick}>
            <span>发布</span>
            {
                modalVisible ? <MdArrowDropDown/> : <MdArrowDropUp/>
            }
        </div>
    </div>
}
import React, {useState} from 'react';
import {InputComment, InputContainer} from './InputBox.style';
import Avatar from "../Avatar/Avatar";

const InputBox = ({userName, onEnter, placeHolder}) => {
    const [inputText, setInputText] = useState('');

    return (<InputContainer>
        <Avatar name={userName}/>
        <InputComment
            type="text"
            name="inputBox"
            id="inputBox"
            value={inputText}
            placeholder={placeHolder || "Write a comment..."}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    onEnter(inputText);
                    setInputText('');
                }
            }}
            onChange={(e) => setInputText(e.target.value)}
        />
    </InputContainer>);
};

export default InputBox;

import React, {useState} from 'react';
import {InputComment, InputContainer} from './InputBox.style';
import Avatar from "../Avatar/Avatar";

const InputBox = ({userName, onEnter, placeHolder, onTagUsers}) => {
    const [inputText, setInputText] = useState('');

    const onChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue === '@' && onTagUsers) {
            onTagUsers();
            setInputText(inputValue)
        } else {
            setInputText(inputValue)
        }
    };

    return (<InputContainer>
        <Avatar name={userName}/>
        <InputComment
            type="text"
            name="inputBox"
            id="inputBox"
            autoComplete="off"
            value={inputText}
            placeholder={placeHolder || "Write a comment..."}
            onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    onEnter(inputText);
                    setInputText('');
                }
            }}
            onKeyDown={(e) => {
                if (onTagUsers) {
                    onTagUsers(e.keyCode);
                }
            }}
            onChange={onChange}
        />
    </InputContainer>);
}

export default InputBox;

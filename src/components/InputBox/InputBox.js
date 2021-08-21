import React, {useState, useEffect} from 'react';
import {InputComment, InputContainer} from './InputBox.style';
import Avatar from "../Avatar/Avatar";

const InputBox = ({userName, onEnter, placeHolder, onTagUsers, tagName, inputRef}) => {
    const [inputText, setInputText] = useState('');

    const onChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue === '@' && onTagUsers) {
            onTagUsers(true);
            setInputText(inputValue)
        } else {
            setInputText(inputValue)
        }
    };

    useEffect(() => {
        if (tagName) {
            let temp = inputText;
            temp = temp.replace('@', tagName);
            setInputText(temp);
        }
    }, [tagName])


    return (<InputContainer>
        <Avatar name={userName}/>
        <InputComment
            type="text"
            name="inputBox"
            id="inputBox"
            ref={inputRef}
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

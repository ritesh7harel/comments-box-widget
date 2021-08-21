import React, {useContext} from 'react';
import InputBox from "../InputBox/InputBox";
import CommentsList from "../CommentsList/CommentsList";
import {Main} from './CommentsBox.style';
import AppContext from "../../state/appContext";
import UserInfo from "../../state/UserInfo";
import {createCommentObject} from '../../util';

const CommentsBox = () => {
    const [{allComments}, dispatch] = useContext(AppContext);

    const onEnterComment = (commentText) => {
        dispatch({type: "ADD_COMMENT", payload: createCommentObject(commentText)});
    };

    return (
        <Main>
            <InputBox userName={UserInfo.name} onEnter={onEnterComment}/>
            <CommentsList comments={allComments}/>
        </Main>
    )
};

export default CommentsBox;

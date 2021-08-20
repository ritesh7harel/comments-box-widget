import React, {useContext} from 'react';
import InputBox from "../InputBox/InputBox";
import CommentsList from "../CommentsList/CommentsList";
import {Main} from './CommentsBox.style';
import _ from "lodash";
import AppContext from "../../state/appContext";
import UserInfo from "../../state/UserInfo";

const CommentsBox = () => {
    const [{allComments}, dispatch] = useContext(AppContext);

    const onEnterComment = (commentText) => {
        const newComment = {
            id: _.uniqueId(),
            authorId: UserInfo.id,
            authorName: UserInfo.name,
            text: commentText,
            time: new Date().toISOString(),
            likes: [],
            replies: [],
        }
        dispatch({type: "ADD_COMMENT", payload: newComment});
    };

    return (
        <Main>
            <InputBox userName={UserInfo.name} onEnter={onEnterComment}/>
            <CommentsList comments={allComments}/>
        </Main>
    )
};

export default CommentsBox;

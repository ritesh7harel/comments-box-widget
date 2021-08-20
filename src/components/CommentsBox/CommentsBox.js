import React, {useContext} from 'react';
import InputBox from "../InputBox/InputBox";
import CommentsList from "../CommentsList/CommentsList";
import {Main} from './CommentsBox.style';
import _ from "lodash";
import AppContext from "../../state/appContext";
import UserInfo from "../../state/UserInfo";

const CommentsBox = () => {
    const [{allComments}, dispatch] = useContext(AppContext);

    console.log({allComments});
    const onEnterComment = (commentText) => {
        const newComment = {
            id: _.uniqueId(),
            authorId: UserInfo.id,
            authorName: UserInfo.name,
            text: commentText,
            time: "today",
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

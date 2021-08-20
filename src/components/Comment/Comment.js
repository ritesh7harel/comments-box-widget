import React from 'react';
import {
    Container,
    RightPart,
    AuthorName,
    CommentText,
    Actions,
    Like,
    Reply,
    Time,
    Details,
    Dot
} from './Comment.style';
import Avatar from "../Avatar/Avatar";
import UserInfo from "../../state/UserInfo";

const Comment = ({comment, onClickReply, onClickLike}) => {
    const {authorName, text, time, likes, id} = comment;
    const isLiked = likes.includes(UserInfo.id);

    return <Container>
        <Avatar name={authorName}/>
        <RightPart>
            <Details>
                <AuthorName>
                    {authorName}
                </AuthorName>
                <CommentText>
                    {text}
                </CommentText>
            </Details>
            <Actions>
                <Like href="#" isLiked={isLiked} onClick={() => onClickLike(id, isLiked)}>
                    Like
                </Like>
                <Dot/>
                <Reply href="#" onClick={() => onClickReply(id)}>
                    Reply
                </Reply>
                <Dot/>
                <Time>
                    {time}
                </Time>
            </Actions>
        </RightPart>
    </Container>
};

export default Comment;

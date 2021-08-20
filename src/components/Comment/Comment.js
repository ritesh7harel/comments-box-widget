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
    Dot,
    Delete
} from './Comment.style';
import Avatar from "../Avatar/Avatar";
import UserInfo from "../../state/UserInfo";
import {formatCommentTime} from '../../util';

const Comment = ({comment, onClickReply, onClickLike, onClickDelete}) => {
    const {authorName, text, time, likes, id, authorId} = comment;
    const isLiked = likes.includes(UserInfo.id);
    const isOwn = UserInfo.id === authorId;

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
                <Like href="#" isLiked={isLiked} onClick={(e) => {
                    e.preventDefault();
                    onClickLike(id, isLiked);
                }}>
                    Like
                </Like>
                <Dot/>
                <Reply href="#" onClick={(e) => {
                    e.preventDefault();
                    onClickReply(id);
                }}>
                    Reply
                </Reply>
                <Dot/>
                {isOwn && <><Delete onClick={(e) => {
                    e.preventDefault();
                    onClickDelete(id);
                }}>Delete</Delete> <Dot/></>}
                <Time>
                    {formatCommentTime(new Date(time))}
                </Time>
            </Actions>
        </RightPart>
    </Container>
};

export default Comment;

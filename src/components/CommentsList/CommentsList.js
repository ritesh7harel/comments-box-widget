import React, {useContext, useState} from 'react';
import Comment from "../Comment/Comment";
import InputBox from "../InputBox/InputBox";
import {Container, InputReplyWrapper, ListItem} from './CommentsList.style';
import AppContext from "../../state/appContext";
import _ from "lodash";
import UserInfo from "../../state/UserInfo";

const CommentsList = ({comments}) => {
        const [, dispatch] = useContext(AppContext);
        const [replyIds, setReplyIds] = useState({});

        const onClickReply = (id) => {
            if (!replyIds[id]) {
                setReplyIds({...replyIds, [id]: true});
            }
        };

        const onClickLike = (id, isLiked) => {
            if (isLiked) {
                dispatch({type: "UNLIKE", payload: {id: id}});
            } else {
                dispatch({type: "LIKE", payload: {id: id}});
            }
        };

        const onClickDelete = (id) => {
            dispatch({type: "DELETE", payload: {id: id}});
        };

        const onEnterReply = (replyText, parentId) => {
            const currentDate = new Date().toISOString();
            const newReply = {
                id: _.uniqueId(),
                authorId: UserInfo.id,
                authorName: UserInfo.name,
                text: replyText,
                time: currentDate,
                likes: [],
                replies: [],
            }
            dispatch({type: "ADD_REPLY", payload: {newReply: newReply, parentId: parentId}});
            delete replyIds[parentId];
        };

        const renderComments = (comments) => {
            return <Container>
                {comments.map((eachComment) => {
                    return (
                        <div key={`parent_${eachComment.id}`}>
                            <ListItem key={`comment_${eachComment.id}`}>
                                <Comment
                                    comment={eachComment}
                                    onClickReply={onClickReply}
                                    onClickLike={onClickLike}
                                    onClickDelete={onClickDelete}
                                    key={eachComment.id}
                                />
                            </ListItem>
                            {eachComment.replies.length > 0 && renderComments(eachComment.replies)}
                            {replyIds[eachComment.id] &&
                            <InputReplyWrapper>
                                <InputBox
                                    userName="Ritesh"
                                    placeHolder="Write a reply..."
                                    onEnter={(text) => onEnterReply(text, eachComment.id)}
                                />
                            </InputReplyWrapper>}
                        </div>
                    )
                })}
            </Container>
        }

        return <div>{renderComments(comments)}</div>
    }
;

export default CommentsList;

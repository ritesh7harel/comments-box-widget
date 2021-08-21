import React, {useContext, useState, useEffect, useCallback} from 'react';
import Comment from "../Comment/Comment";
import InputBox from "../InputBox/InputBox";
import {Container, InputReplyWrapper, ListItem, CommentsSection} from './CommentsList.style';
import AppContext from "../../state/appContext";
import UserInfo from "../../state/UserInfo";
import TagUsers from "../TagUsers/TagUsers";
import {createCommentObject} from "../../util";

const CommentsList = ({comments}) => {
        const [, dispatch] = useContext(AppContext);
        const [replyIds, setReplyIds] = useState({});
        const [activeTag, setActiveTag] = useState(0);
        const [showTagUsers, setShoTagUsers] = useState(false);
        const [threadUsers, setThreadUsers] = useState([]);
        const [inputWithTagName, updateInputWithTagName] = useState('');

        const onClickReply = (id) => {
            if (!replyIds[id]) {
                setReplyIds({...replyIds, [id]: true});
            }
        };

        const addUsersInTagThread = (comments, users) => {
            comments.forEach((eachComment) => {
                if (eachComment.authorId !== UserInfo.id) {
                    users.push({id: eachComment.authorId, authorName: eachComment.authorName});
                }
                if (eachComment.replies.length > 0) {
                    addUsersInTagThread(eachComment.replies, users);
                }
            });
            return users;
        }

        useEffect(() => {
            setThreadUsers(addUsersInTagThread(comments, []));
        }, [comments]);

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
            if(replyText){
                dispatch({type: "ADD_REPLY", payload: {newReply: createCommentObject(replyText), parentId: parentId}});
                delete replyIds[parentId];
            }
        };

        const onTagUsers = (action) => {
            if (action === 40 && activeTag < threadUsers.length) {
                setActiveTag(activeTag + 1);
            } else if (action === 38 && activeTag > 0) {
                setActiveTag(activeTag - 1);
            } else if (action === 39) {
                setShoTagUsers(false);
                updateInputWithTagName(threadUsers[activeTag].authorName);
                setActiveTag(0);
            } else if (action === true) {
                setShoTagUsers(true);
            }
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
                                    userName={UserInfo.name}
                                    placeHolder="Write a reply..."
                                    onEnter={(text) => onEnterReply(text, eachComment.id)}
                                    onTagUsers={onTagUsers}
                                    tagName={inputWithTagName}
                                />
                                {showTagUsers && <TagUsers users={threadUsers} active={activeTag}/>}
                            </InputReplyWrapper>}
                        </div>
                    )
                })}
            </Container>
        }

        return <CommentsSection>{renderComments(comments)}</CommentsSection>
    }
;

export default CommentsList;

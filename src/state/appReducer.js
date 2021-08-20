import UserInfo from "./UserInfo";

const addReply = (allComments, newReply, parentId) => {
    allComments.map((item) => {
        if (item.id === parentId) {
            item.replies.push(newReply);
        }
        addReply(item.replies, newReply, parentId);
    });

    return allComments;
};

const addLike = (allComments, id) => {
    allComments.map((item) => {
        if (item.id === id) {
            item.likes.push(UserInfo.id);
        }
        addLike(item.replies, id);
    });

    return allComments;
};

const removeLike = (allComments, id) => {
    allComments.map((item) => {
        if (item.id === id) {
            item.likes = item.likes.filter((eachLike) => eachLike !== UserInfo.id);
        }
        removeLike(item.replies, id);
    });

    return allComments;
};

const deleteComment = (allComments, id) => {
    allComments = allComments.filter((item) => {
        if (item.id === id) {
            return false;
        }
        item.replies = deleteComment(item.replies, id);
        return true;
    });

    return allComments;
}

const updateLocalStorage = (updatedStateComments) => {
    localStorage.setItem('allComments', JSON.stringify(updatedStateComments));
};

const reducer = (state, action) => {
    let updatedStateComments = [];
    switch (action.type) {
        case "ADD_COMMENT":
            updatedStateComments = [action.payload, ...state.allComments];
            updateLocalStorage(updatedStateComments);
            return {
                allComments: updatedStateComments,
            };
        case "ADD_REPLY":
            updatedStateComments = [...addReply(state.allComments, action.payload.newReply, action.payload.parentId)];
            updateLocalStorage(updatedStateComments);
            return {
                allComments: updatedStateComments,
            };
        case "LIKE":
            updatedStateComments = [...addLike(state.allComments, action.payload.id)];
            updateLocalStorage(updatedStateComments);
            return {
                allComments: updatedStateComments,
            };
        case "UNLIKE":
            updatedStateComments = [...removeLike(state.allComments, action.payload.id)];
            updateLocalStorage(updatedStateComments);
            return {
                allComments: updatedStateComments,
            };
        case "DELETE":
            updatedStateComments = [...deleteComment(state.allComments, action.payload.id)];
            updateLocalStorage(updatedStateComments);
            return {
                allComments: updatedStateComments,
            };
        default:
            throw new Error();
    }
};

export default reducer;

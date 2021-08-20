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

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return {
                allComments: [...state.allComments, action.payload],
            };
        case "ADD_REPLY":
            return {
                allComments: [...addReply(state.allComments, action.payload.newReply, action.payload.parentId)],
            };
        case "LIKE":
            return {
                allComments: [...addLike(state.allComments, action.payload.id)],
            };
        case "UNLIKE":
            return {
                allComments: [...removeLike(state.allComments, action.payload.id)],
            };
        default:
            throw new Error();
    }
};

export default reducer;

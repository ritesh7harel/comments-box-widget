import React, {useReducer} from "react";
import AppContext from "./appContext";
import reducer from "./appReducer";

const data = [
    {
        id: 11,
        authorId: 1,
        authorName: "Raj Patil",
        text: "Here is my comment 11",
        time: "2021-07-20T18:55:35.788Z",
        likes: [1, 4],
        replies: [
            {
                id: 12,
                authorId: 2,
                authorName: "Vaibhav T",
                text: "Here is my comment 12",
                time: "2021-08-20T07:30:35.788Z",
                likes: [1, 4],
                replies: [
                    {
                        id: 13,
                        authorId: 3,
                        authorName: "Ajay K",
                        text: "Here is my comment 13",
                        time: "2021-08-20T18:55:35.788Z",
                        likes: [1, 4],
                        replies: []
                    }
                ]
            },
            {
                id: 14,
                authorId: 4,
                authorName: "ritesh4",
                text: "Here is my comment 14",
                time: "2021-08-20T18:55:35.788Z",
                likes: [1, 4],
                replies: [],
            }
        ]
    },
    {
        id: 15,
        authorId: 5,
        authorName: "Shubham",
        text: "Here is my comment 15",
        time: "2021-08-20T18:55:35.788Z",
        likes: [1, 4],
        replies: [
            {
                id: 16,
                authorId: 6,
                authorName: "Vinit",
                text: "Here is my comment 16",
                time: "2021-08-20T18:55:35.788Z",
                likes: [1, 4],
                replies: [
                    {
                        id: 17,
                        authorId: 7,
                        authorName: "Rahul",
                        text: "Here is my comment 17",
                        time: "2021-08-20T18:55:35.788Z",
                        likes: [1, 4],
                        replies: []
                    }
                ]
            },
            {
                id: 18,
                authorId: 8,
                authorName: "Ritesh",
                text: "Here is my comment 18",
                time: "2021-08-20T18:55:35.788Z",
                likes: [1, 4],
                replies: [],
            }
        ]
    }
];

const AppProvider = ({children}) => {
    const initialState = {
        allComments: localStorage.getItem('allComments') ? JSON.parse(localStorage.getItem('allComments')) : data,
    };

    return (
        <AppContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;

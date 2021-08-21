import React from 'react';
import {UsersContainer, UsersList, UserListItem} from './TagUsers.style';

const TagUsers = ({users, active}) => {
    return <UsersContainer>
        <UsersList style={{listStyleType: 'none'}}>
            {users.map((eachUser, index) => <UserListItem
                isActive={active === index}
                key={`tagUser_${eachUser.id}`}>{eachUser.authorName}
            </UserListItem>)}
        </UsersList>
    </UsersContainer>
};

export default TagUsers;

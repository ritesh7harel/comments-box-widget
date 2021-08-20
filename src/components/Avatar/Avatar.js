import React from 'react';
import {getInitials} from '../../util';
import {Initials} from './Avatar.style';

const Avatar = ({name}) => {
    return <Initials>{getInitials(name)}</Initials>
};

export default Avatar;

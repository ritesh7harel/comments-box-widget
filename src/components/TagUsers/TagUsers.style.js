import styled from "styled-components";

export const UsersContainer = styled.div`
   position: relative;
  cursor: pointer;
  margin-left: 30px;
`
export const UsersList = styled.ul`
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
`

export const UserListItem = styled.li`
    color: ${props => props.isActive ? "#59C09C" : "white"};
`

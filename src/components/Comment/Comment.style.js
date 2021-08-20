import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Details = styled.div`
     background: #EFF2F5;
     padding: 8px;
     border-radius: 20px;
`;

export const RightPart = styled.div`
`;

export const AuthorName = styled.div`
    padding: 2px;
    font-weight: bold;
`;

export const CommentText = styled.div`
  padding: 2px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #65676B
`;

const LinkStyle = styled.a`
    padding-left: 5px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    color: #65676B;
    text-decoration: none;
    
    :hover{
      text-decoration: underline;
    }
`;

export const Like = styled(LinkStyle)`
   color: ${props => props.isLiked ? "#59C09C" : "#65676B"};
   padding-left: 5px;
`;

export const Reply = styled(LinkStyle)`
   padding-left: 5px;
`;

export const Delete = styled(LinkStyle)`
   padding-left: 5px;
`;

export const Time = styled.div`
    padding-left: 5px;
    font-size: 14px;
`;

export const Dot = styled.div`
    height: 3px;
    width: 3px;
    border-radius: 50%;
    background: #65676B;
    margin: 7px;
`;

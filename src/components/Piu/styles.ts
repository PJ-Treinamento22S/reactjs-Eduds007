import styled from "styled-components";

interface deletedProps {
  deleted:string;
}

export const PostDiv = styled.div<deletedProps>`
  background-color: #003566;
  padding: 30px 30px 0px 30px;
  margin: 10px;
  border-radius: 45px;
  width: 80%;
  
  display: ${(props) => {

    console.log(props.deleted)
    return (props.deleted)}};
    
  flex-direction: column;
`;

export const PostProfile = styled.div`
  display: flex;
  background-color: #ffc300;
  width: fit-content;
  padding-right: 24px;
  border-radius: 45px;
`;

export const ProfilePic = styled.img`
  width: 52px;
  height: 53px;
  border-radius: 45px;
  object-fit: cover;
`;
export const ProfileName = styled.p`
  display: flex;
  margin-left: 10px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-right: 8px;
`;

export const Verified = styled.img``;

export const PostReactions = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: flex-end;
  margin-bottom: 0px;
`;

export const ReactionsImg = styled.img`
  margin-left: 8px;
  width: 24px;
  margin-bottom: 8px;
`;

export const Likes = styled.p`

`

export const PostText = styled.p`
display: flex;
margin-left: 10%;
`;

import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex: 50%;
  align-items: center;
  text-align: center;
  flex-direction: column-reverse;
  overflow-y: scroll;
  height: 100%;
`;


export const PostDiv = styled.div`
  background-color: #003566;
  padding: 30px 30px 0px 30px;
  margin: 10px;
  border-radius: 45px;
`;

export const PostProfile = styled.div`
  display: flex;
  background-color: #ffc300;
  width: fit-content;
  padding-right: 24px;
  border-radius: 45px;
`;

export const ProfilePic = styled.img`
  
`;
export const ProfileName = styled.p`
  display: flex;
  margin-left: 10px;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-right: 8px;
`;

export const Verified = styled.img `

`
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

export const PostText = styled.p `
`
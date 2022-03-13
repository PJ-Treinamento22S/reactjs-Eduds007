import React from "react";
import * as S from "./styles";
import Like from '../../assets/like.svg'
import Comment from "../../assets/comment.svg";
import Share from "../../assets/share.svg";
import Delete from "../../assets/trash.svg";
import ProfileP from "../../assets/baymax.svg";
import Veripiu from "../../assets/piu.svg";

const Posts = () => {
    return (
      <>
        <S.MainDiv>
          <S.PostDiv>
            <S.PostProfile>
                <S.ProfilePic src={ProfileP}></S.ProfilePic>
                <S.ProfileName>baymax</S.ProfileName>
                <S.Verified src={Veripiu}></S.Verified>
            </S.PostProfile>
            <S.PostText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vitae.
            </S.PostText>
            <S.PostReactions>
              <S.ReactionsImg src={Like}></S.ReactionsImg>
              <S.ReactionsImg src={Comment}></S.ReactionsImg>
              <S.ReactionsImg src={Share}></S.ReactionsImg>
              <S.ReactionsImg src={Delete}></S.ReactionsImg>
            </S.PostReactions>
          </S.PostDiv>
          
        </S.MainDiv>
      </>
    );
}

export default Posts;
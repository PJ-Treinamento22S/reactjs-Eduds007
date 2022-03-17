import React, { useEffect, useState } from "react";
import Like from "../../assets/like.svg";
import Comment from "../../assets/comment.svg";
import Share from "../../assets/share.svg";
import Delete from "../../assets/trash.svg";
import ProfileP from "../../assets/baymax.svg";
import Veripiu from "../../assets/piu.svg";
import * as S from "./styles";
import { Piu } from "../../interfaces";
import api from "../../config/api";

interface PiuPostProps {
    piu: Piu; 
}

const PiuPost: React.FC<PiuPostProps> =  ({piu}) => {
    
    const [likes, setLike] = useState(piu.likes.length)
    
    
    const [deleted, setDelete] = useState('flex')

    return (
      <>
        <S.PostDiv deleted={deleted}> 
          <S.PostProfile>
            <S.ProfilePic
              src={piu.user.photo}
              onError={(e) => {
                (e.target as any).src = ProfileP;
              }}
            />
            <S.ProfileName>
              {" "}
              (@{piu.user.username}) - {piu.user.first_name}{" "}
              {piu.user.last_name}
            </S.ProfileName>
            <S.Verified src={Veripiu}></S.Verified>
          </S.PostProfile>
          <S.PostText>{piu.text}</S.PostText>
          <S.PostReactions>
            <S.Likes>{likes}</S.Likes>
            <S.ReactionsImg src={Like} onClick={(e) => {
                api.post('/pius/like',  {piu_id: piu.id} ).then((response) => {
                    
                    response.data["operation"] == "like"
                      ? setLike(likes + 1)
                      : setLike(likes - 1);
                })
                
                
            }}></S.ReactionsImg>
            <S.ReactionsImg src={Comment}></S.ReactionsImg>
            <S.ReactionsImg src={Share}></S.ReactionsImg>
            <S.ReactionsImg src={Delete} onClick={ () => {
                api.delete("/pius", {data:{piu_id: piu.id}}).then((response) => {
                    setDelete("none");
                  console.log("aaa");
                }); 
            }}/>
          </S.PostReactions>
        </S.PostDiv>
        ;
      </>
    );
}

export default PiuPost

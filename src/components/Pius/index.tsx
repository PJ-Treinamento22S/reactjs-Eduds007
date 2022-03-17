import React, {useEffect, useState} from "react"
import PiuPost from "../Piu";
import Like from '../../assets/like.svg'
import Comment from "../../assets/comment.svg";
import Share from "../../assets/share.svg";
import Delete from "../../assets/trash.svg";
import ProfileP from "../../assets/baymax.svg";
import Veripiu from "../../assets/piu.svg";
import api from "../../config/api";
import * as S from "./styles";
import {Piu} from '../../interfaces'

interface PiusProps {
  pius: Piu[]
}


const Pius = ({pius}:PiusProps) => {

    return (
      <>
        <S.MainDiv>
          
          {pius.map((piu) => {
            return <PiuPost key={piu.id} piu={piu}  />;
          })}
        </S.MainDiv>
      </>
    );
}

export default Pius;
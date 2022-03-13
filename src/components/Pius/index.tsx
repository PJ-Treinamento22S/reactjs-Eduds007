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




const Pius = () => {

  const [pius, setPius] = useState([] as Piu[])


  useEffect(()=> {
    const getPiu = async () => {
      const response = await api.get('/pius')
      setPius(response.data)
      
      
  
    }
    getPiu()
  }, [])

  console.log(pius)

  

    return (
      <>
        <S.MainDiv>
          
          <PiuPost/>

          

        </S.MainDiv>
      </>
    );
}

export default Pius;
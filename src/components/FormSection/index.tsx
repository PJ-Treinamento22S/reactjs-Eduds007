import React, { useState } from "react";
import * as S from "./styles";
import Camera from "../../assets/photo.svg"
import File from "../../assets/file.svg";
import Picture from "../../assets/picture.svg";



const Form = () => {
    
    const [contador, setContador] = useState(0);
    const text = (contador<140) ?`${contador}/140` : "- o texto deve ter entre 1 e 140 palavras -" 
    
    
 
    
    return (
      <>
      <S.PostDiv>
           <S.FormDiv>
          <S.FormTile>Mande seu Piu</S.FormTile>
          <S.FormArea isRed={(contador>=140)} placeholder="Digite seu piu" onChange={(e) => setContador(e.target.value.length) }></S.FormArea>
          <S.FilesDiv>
            <S.FileImg src={Camera}></S.FileImg>
            <S.FileImg src={File}></S.FileImg>
            <S.FileImg src={Picture}></S.FileImg>
          </S.FilesDiv>
          <S.WordCount isRed={(contador>=140)}>{text}</S.WordCount>
          <S.PublishButton>Clique Aqui</S.PublishButton>
        </S.FormDiv>
      </S.PostDiv>
       
      </>
    );
}


export default Form

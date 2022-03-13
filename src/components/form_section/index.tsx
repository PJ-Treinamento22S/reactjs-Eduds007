import React from "react";
import * as S from "./styles";
import Camera from "../../assets/photo.svg"
import File from "../../assets/file.svg";
import Picture from "../../assets/picture.svg";

const Form = () => {
    return (
      <>
      <S.PostDiv>
           <S.FormDiv>
          <S.FormTile>Mande seu Piu</S.FormTile>
          <S.FormArea placeholder="Digite seu piu"></S.FormArea>
          <S.FilesDiv>
            <S.FileImg src={Camera}></S.FileImg>
            <S.FileImg src={File}></S.FileImg>
            <S.FileImg src={Picture}></S.FileImg>
          </S.FilesDiv>
          <S.WordCount>0/140</S.WordCount>
          <S.PublishButton>Clique Aqui</S.PublishButton>
        </S.FormDiv>
      </S.PostDiv>
       
      </>
    );
}


export default Form
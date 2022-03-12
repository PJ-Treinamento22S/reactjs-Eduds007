import React from 'react'
import * as S from "./syles"
import Image from '../../assets/profile.svg'

const Header = () => {
    return (
      <>
        <S.HeaderContent>
          <S.HeaderProfile>
            <S.HeaderImg src={Image}></S.HeaderImg>
            <S.HeaderText>olá tudo bem eu me chamdo eduardo</S.HeaderText>
          </S.HeaderProfile>

          <S.NavDiv>
            <S.NavLinks>Home</S.NavLinks>
            <S.NavLinks>Buscar</S.NavLinks>
            <S.NavLinks>Seja TopPiu</S.NavLinks>
            <S.NavLinks>Piu Level</S.NavLinks>
            <S.NavLinks>Configurações</S.NavLinks>
          </S.NavDiv>
          <S.LogoutLink>Logout</S.LogoutLink>
        </S.HeaderContent>
      </>
    );
}


export default Header
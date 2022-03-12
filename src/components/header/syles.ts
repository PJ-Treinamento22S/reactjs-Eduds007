import styled from "styled-components";

export const HeaderContent = styled.div `
    background-color: #003566;
    flex: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
    border-radius: 0 25px 25px 0 ;
    padding-top: 30px;
    justify-content: space-between;
    text-align: center;
    height: 100%;

`

export const HeaderProfile = styled.div `

`

export const HeaderText = styled.p`

    
    font-weight: 1000;

`

export const HeaderImg = styled.img`
  filter: invert(84%) sepia(35%) saturate(4460%) hue-rotate(359deg)
    brightness(102%) contrast(104%);
  width: 65px;
  height: 65px;
  
`;

export const NavDiv = styled.div `
    display: flex;
    flex-direction: column;
`

export const NavLinks = styled.a`
  margin: 24px;
`;

export const LogoutLink = styled.p`
  margin-bottom: 10px;
`;
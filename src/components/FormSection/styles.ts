
import styled from "styled-components";


interface WordCountProps {
  isRed: boolean
}

export const PostDiv = styled.div`
    display: flex;
    justify-content: center;
    background-color: #f6f6f6;
    flex: 30%;
    align-items: center;
`

export const FormDiv = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  background-color: #003566;
  padding: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border-radius: 25px;
`;

export const FormTile = styled.p`
  font-family: sans-serif;
  font-weight: bold;
`;
export const FilesDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;
export const FileImg = styled.img `
`



export const FormArea = styled.textarea<WordCountProps>`
  height: 400px;
  width: 280px;
  border-radius: 30px;
  text-decoration: none;
  background-color: #003566;
  color: #f6f6f6;
  outline: none !important;
  border: 3px solid #f6f6f6;
  padding: 30px;
  display: flex;
  flex: initial;
  color: ${(props) => (props.isRed ? "red" : "#f6f6f6")};
`;

export const PublishButton = styled.button`
  padding: 16px 24px 16px 24px;
  margin-top: 16px;
  outline: none !important;
  border: 3px solid #ffc300;
  background-color: #ffc300;
  color: #f6f6f6;
  border-radius: 15px;
`;




export const WordCount = styled.p<WordCountProps> `
  color: ${(props) => props.isRed? 'red' : '#f6f6f6' }
  
`
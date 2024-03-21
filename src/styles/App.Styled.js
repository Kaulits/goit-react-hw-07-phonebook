import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 5px gray;
  width: 400px;
  margin: 30px auto;
  background-color: #f4f4f4;
  padding: 20px;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledDesc = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

export const StyledBtn = styled.button`
  width: 200px;
  background-color: #4caf50;
  margin: 20px auto 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 6px 5px gray;
  width: 400px;
  margin: 30px auto;
  background-color: #f4f4f4;
  padding: 20px;
`;

export const StyledContactLi = styled.li`
  list-style: none;
  margin-top: 10px;
  display: flex;
  text-align: center;
`;

export const StyledSpan = styled.span`
  margin-right: auto;
`;

export const StyledBtnDelete = styled.button`
  width: 70px;
  background-color: #f44336;
  margin-left: auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;

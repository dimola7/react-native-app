import styled from 'styled-components/native';

export const Container = styled.View`
    margin-vertical: 15px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    width: 100%
`
export const Search = styled.View`
    padding: 10px;
    flex-direction: row;
    width: 100%;
    background-color: #fff;
    border-radius: 15px;
    align-items: center;
    border-width: 1;
    border-color: #d9dbda
`
export const Input = styled.TextInput`
    fontSize: 20px;
    marginLeft: 10px;
    width: 90%
`
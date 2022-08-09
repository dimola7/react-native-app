import styled from 'styled-components/native';
import colors from "../../constants/colors";
import {IStyles} from "./types"

export const CardView = styled.View`
    background-color: ${colors.white};
    overflow: hidden;
`
export const CardImage = styled.Image`
    width: 100%;
    height: 200px
`
export const CardText = styled.Text`
    font-size: ${(props: IStyles) => props.fontSize ? props.fontSize : "14px"};
    color: ${(props: IStyles) => props.color ? props.color : "#000"};
    text-align: ${(props: IStyles) => props.textAlign ? props.textAlign : "left"};
    margin-top: ${(props: IStyles) => props.marginTop ? props.marginTop : "7px"};
    margin-bottom: ${(props: IStyles) => props.marginBottom ? props.marginBottom : "7px"};
`
import styled from "styled-components/native";
import colors from "../../constants/colors";
import { IStyles } from "./types";

export const ButtonStyle = styled.TouchableOpacity`
  background-color: ${(props: IStyles) =>
    props.backgroundColor ? props.backgroundColor : colors.black};
  border-radius: ${(props: IStyles) =>
    props.borderRadius ? props.borderRadius : "25px"};
  padding: ${(props: IStyles) => (props.padding ? props.padding : "15px")};
  width: ${(props: IStyles) => (props.width ? props.width : "100%")};
  justify-content: center;
  align-items: center;
  margin-vertical: 10px;
`;

export const Text = styled.Text`
  color: ${(props: IStyles) => (props.color ? props.color : colors.white)};
  font-weight: bold
`;

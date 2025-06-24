import {View, Text} from "react-native";
import {HeaderStyles} from "./Header.styles";

export interface IHeaderProps {
  title: string;
}

export default function Header({title}: IHeaderProps) {
  return (
    <View style={HeaderStyles.header}>
      <Text style={HeaderStyles.headerTitle}>{title}</Text>
    </View>
  )
}
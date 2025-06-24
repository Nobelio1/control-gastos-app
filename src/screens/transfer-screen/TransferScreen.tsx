import { SafeAreaView } from 'react-native-safe-area-context';
import {transferScreenStyles} from "./TransferScreen.styles";
import {View} from "react-native";
import Header from "../../components/shared/header-screen/Header";

export default function TransferScreen() {
  return (
    <SafeAreaView style={transferScreenStyles.container}>
      <Header title={'Transferencias'}/>
      <View style={transferScreenStyles.content}>
      </View>
    </SafeAreaView>
  );
}
import {SafeAreaView} from 'react-native-safe-area-context';
import {homeScreenStyles} from "./HomeScreenStyles";
import Header from "../../components/shared/header-screen/Header";
import {View} from "react-native";
import {TransferSummary} from "../../components/home/transfer-summary/TransferSummary";
import {TransferHistory} from "../../components/home/transfer-history/TransferHistory";

export default function HomeScreen() {
  return (
    <SafeAreaView style={homeScreenStyles.container}>
      <Header title={'Inicio'}/>
      <View style={homeScreenStyles.content}>
        <TransferSummary/>
        <TransferHistory/>
      </View>
    </SafeAreaView>
  );
}

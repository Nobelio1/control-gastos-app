import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from "../../components/shared/header-screen/Header";
import {statsScreenStyles} from "./StatsScreen.styles";

export default function StatsScreen() {
  return (
    <SafeAreaView style={statsScreenStyles.container}>
      <Header title={'Estadisticas'}/>
      <View style={statsScreenStyles.content}>
      </View>
    </SafeAreaView>
  );
}

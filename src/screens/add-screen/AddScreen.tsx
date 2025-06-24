import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from "../../components/shared/header-screen/Header";
import {addScreenStyles} from "./AddScreen.styles";

export default function AddScreen() {
  return (
    <SafeAreaView style={addScreenStyles.container}>
      <Header title={'Agregar Transferencia'}/>
      <View style={addScreenStyles.content}>
      </View>
    </SafeAreaView>
  );
}
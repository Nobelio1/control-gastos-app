import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from "../../components/shared/header-screen/Header";
import {addScreenStyles} from "./AddScreen.styles";
import {AddForm} from "../../components/add-transfer/AddForm";
import {RouteProp, useRoute} from "@react-navigation/native";
import {Transaction} from "../../types/form.types";

type AddScreenRouteProp = RouteProp<{
  params: {
    editTransaction?: Transaction;
  };
}, 'params'>;

export default function AddScreen() {
  const route = useRoute<AddScreenRouteProp>();
  const editTransaction = route.params?.editTransaction;

  return (
    <SafeAreaView style={addScreenStyles.container}>
      <Header title={'Agregar Transferencia'}/>
      <View style={addScreenStyles.content}>
        <AddForm editTransaction={editTransaction} />
      </View>
    </SafeAreaView>
  );
}
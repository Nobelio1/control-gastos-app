import {SafeAreaView} from 'react-native-safe-area-context';
import {transferScreenStyles} from "./TransferScreen.styles";
import {View} from "react-native";
import Header from "../../components/shared/header-screen/Header";
import {Tabs} from "../../components/transfer/tabs/Tabs";
import {TransferCard} from "../../components/home/transfer-card/TransferCard";
import {selectTransactions, useTransactionStore} from "../../storage/transactionStore";

export default function TransferScreen() {
  const transactions = useTransactionStore(selectTransactions);

  return (
    <SafeAreaView style={transferScreenStyles.container}>
      <Header title={'Transferencias'}/>
      <View style={transferScreenStyles.content}>
        <Tabs/>
        <View style={{flex: 1, paddingTop: 20, gap: 10}}>
          {transactions.map((transaction) => (
            <TransferCard key={transaction.id} transaction={transaction}/>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}
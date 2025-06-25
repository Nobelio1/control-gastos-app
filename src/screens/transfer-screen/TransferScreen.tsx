import {SafeAreaView} from 'react-native-safe-area-context';
import {transferScreenStyles} from "./TransferScreen.styles";
import {ScrollView, View} from "react-native";
import Header from "../../components/shared/header-screen/Header";
import {Tabs} from "../../components/transfer/tabs/Tabs";
import {TransferCard} from "../../components/home/transfer-card/TransferCard";
import {selectTransactions, useTransactionStore} from "../../storage/transactionStore";
import {useState} from "react";

export default function TransferScreen() {
  const transactions = useTransactionStore(selectTransactions);
  const [activeTab, setActiveTab] = useState<'income' | 'expense'>('income');

  const filteredTransactions = transactions.filter(transaction => {
    if (activeTab === 'income') {
      return transaction.type === 'income';
    } else {
      return transaction.type === 'expense';
    }
  })

  return (
    <SafeAreaView style={transferScreenStyles.container}>
      <Header title={'Transferencias'}/>
      <View style={transferScreenStyles.content}>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <ScrollView contentContainerStyle={transferScreenStyles.scrollView} style={{flex: 1, paddingTop: 20}}>
          {filteredTransactions.map((transaction) => (
            <TransferCard key={transaction.id} transaction={transaction}/>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
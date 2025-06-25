import {View, Text} from 'react-native';
import {transferSummaryStyles} from "./TransferSummary.styles";
import {Ionicons} from "@expo/vector-icons";
import {
  selectBalance,
  selectTotalExpense,
  selectTotalIncome,
  useTransactionStore
} from "../../../storage/transactionStore";
import {getCurrentMonthRange} from "../../../utils/dateUtils";

export function TransferSummary() {
  const income = useTransactionStore(selectTotalIncome);
  const expense = useTransactionStore(selectTotalExpense);
  const balance = useTransactionStore(selectBalance);

  return (
    <View style={transferSummaryStyles.container}>
      <View style={transferSummaryStyles.total}>
        <Text style={transferSummaryStyles.totalPeriod}>{getCurrentMonthRange()}</Text>
        <Text style={transferSummaryStyles.totalAmount}>S/. {balance}</Text>
      </View>
      <View style={transferSummaryStyles.io}>
        <FlowCard inOut={true} amount={income}/>
        <FlowCard inOut={false} amount={expense}/>
      </View>
    </View>
  )
}

function FlowCard({inOut, amount}: { inOut: boolean, amount: number }) {
  return (
    <View style={transferSummaryStyles.flowCard}>
      <View style={transferSummaryStyles.flowIcon}>
        <Ionicons name={inOut ? "arrow-up" : "arrow-down"} size={24} color={inOut ? "green" : "red"}/>
      </View>
      <View>
        <Text style={transferSummaryStyles.flowType}>{inOut ? "Ingresos" : "Gastos"}</Text>
        <Text style={transferSummaryStyles.flowAmount}>S/. {amount}</Text>
      </View>
    </View>
  )
}
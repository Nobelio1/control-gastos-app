import {View, Text} from 'react-native';
import {transferSummaryStyles} from "./TransferSummary.styles";
import {Ionicons} from "@expo/vector-icons";

export function TransferSummary() {
  return (
    <View style={transferSummaryStyles.container}>
      <View style={transferSummaryStyles.total}>
        <Text style={transferSummaryStyles.totalPeriod}>1. Jun. 2023 - 4 Jun. 2023</Text>
        <Text style={transferSummaryStyles.totalAmount}>$ 41.000,00</Text>
      </View>
      <View style={transferSummaryStyles.io}>
        <FlowCard inOut={true}/>
        <FlowCard inOut={false}/>
      </View>
    </View>
  )
}

function FlowCard({inOut}: { inOut: boolean }) {
  return (
    <View style={transferSummaryStyles.flowCard}>
      <View style={transferSummaryStyles.flowIcon}>
        <Ionicons name="arrow-up" size={24} color={inOut ? "green" : "red"}/>
      </View>
      <View>
        <Text style={transferSummaryStyles.flowType}>{inOut ? "Ingresos" : "Gastos"}</Text>
        <Text style={transferSummaryStyles.flowAmount}>$55.420,00</Text>
      </View>
    </View>
  )
}
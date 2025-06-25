import {Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {monthSummaryCardStyles} from "./MonthSummaryCard.styles";

export function MonthSummaryCard() {
  return (
    <View style={monthSummaryCardStyles.container}>
      <Text style={monthSummaryCardStyles.totalPeriod}>Jun. 2023</Text>
      <Text style={monthSummaryCardStyles.totalAmount}>$ 41.000,00</Text>
      <View style={{paddingTop: 14}}>
        <View style={monthSummaryCardStyles.io}>
          <FlowCard inOut={true}/>
          <FlowCard inOut={false}/>
        </View>
      </View>
    </View>
  )
}

function FlowCard({inOut}: { inOut: boolean }) {
  return (
    <View style={monthSummaryCardStyles.flowCard}>
      <View style={inOut? monthSummaryCardStyles.flowIconIn : monthSummaryCardStyles.flowIconOut}>
        <Ionicons name={inOut ? "arrow-up" : "arrow-down"} size={24} color="white"/>
      </View>
      <View>
        <Text style={monthSummaryCardStyles.flowType}>{inOut ? "Ingresos" : "Gastos"}</Text>
        <Text style={monthSummaryCardStyles.flowAmount}>$55.420,00</Text>
      </View>
    </View>
  )
}
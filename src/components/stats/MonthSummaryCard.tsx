import {Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {monthSummaryCardStyles} from "./MonthSummaryCard.styles";
import {MonthlyStats} from "../../types/monthyStats.types";

export function MonthSummaryCard({month}: { month: MonthlyStats }) {
  const {month: monthI, balance, expense, income} = month

  return (
    <View style={monthSummaryCardStyles.container}>
      <Text style={monthSummaryCardStyles.totalPeriod}>{`${monthI}`}</Text>
      <Text style={monthSummaryCardStyles.totalAmount}>S/.{balance}</Text>
      <View style={{paddingTop: 14}}>
        <View style={monthSummaryCardStyles.io}>
          <FlowCard amount={income} inOut={true}/>
          <FlowCard amount={expense} inOut={false}/>
        </View>
      </View>
    </View>
  )
}

function FlowCard({inOut, amount}: { inOut: boolean, amount: number }) {
  return (
    <View style={monthSummaryCardStyles.flowCard}>
      <View style={inOut ? monthSummaryCardStyles.flowIconIn : monthSummaryCardStyles.flowIconOut}>
        <Ionicons name={inOut ? "arrow-up" : "arrow-down"} size={24} color="white"/>
      </View>
      <View>
        <Text style={monthSummaryCardStyles.flowType}>{inOut ? "Ingresos" : "Gastos"}</Text>
        <Text style={monthSummaryCardStyles.flowAmount}>S/.{amount}</Text>
      </View>
    </View>
  )
}
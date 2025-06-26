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
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolate
} from 'react-native-reanimated';
import {useEffect} from "react";
import {LinearGradient} from "expo-linear-gradient";
import {COLORS_CORE, THEMES} from "../../../constants/colors";

export function TransferSummary() {
  const income = useTransactionStore(selectTotalIncome);
  const expense = useTransactionStore(selectTotalExpense);
  const balance = useTransactionStore(selectBalance);

  const animation = useSharedValue(0);

  useEffect(() => {
    animation.value = withRepeat(
      withTiming(1, {duration: 8000}),
      -1,
      true
    );
  }, []);

  const animatedStyle1 = useAnimatedStyle(() => {
    const translateX = interpolate(animation.value, [0, 1], [0, 10]);
    const translateY = interpolate(animation.value, [0, 1], [0, -5]);

    return {
      transform: [
        {translateX},
        {translateY},
      ],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    const translateX = interpolate(animation.value, [0, 1], [0, -8]);
    const translateY = interpolate(animation.value, [0, 1], [0, 6]);

    return {
      transform: [
        {translateX},
        {translateY},
      ],
    };
  });

  return (
    <LinearGradient
      colors={[THEMES[0].PRIMARY, THEMES[0].SECONDARY, THEMES[0].TERTIARY]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={transferSummaryStyles.container}
    >
      <Animated.View style={[transferSummaryStyles.decorativeCircle1, animatedStyle1]}/>
      <Animated.View style={[transferSummaryStyles.decorativeCircle2, animatedStyle2]}/>

      <View style={transferSummaryStyles.total}>
        <Text style={transferSummaryStyles.totalPeriod}>{getCurrentMonthRange()}</Text>
        <Text style={transferSummaryStyles.totalAmount}>S/. {balance.toLocaleString()}</Text>
      </View>

      <View style={transferSummaryStyles.io}>
        <FlowCard inOut={true} amount={income}/>
        <FlowCard inOut={false} amount={expense}/>
      </View>
    </LinearGradient>
  )
}

function FlowCard({inOut, amount}: { inOut: boolean, amount: number }) {
  return (
    <View style={transferSummaryStyles.flowCard}>
      <View style={transferSummaryStyles.flowIcon}>
        <Ionicons name={inOut ? "arrow-up" : "arrow-down"} size={24}
                  color={inOut ? COLORS_CORE.GREEN_INCOME : COLORS_CORE.RED_EXPENSE}/>
      </View>
      <View>
        <Text style={transferSummaryStyles.flowType}>{inOut ? "Ingresos" : "Gastos"}</Text>
        <Text style={transferSummaryStyles.flowAmount}>S/. {amount}</Text>
      </View>
    </View>
  )
}
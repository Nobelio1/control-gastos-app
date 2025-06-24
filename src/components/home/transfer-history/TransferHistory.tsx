import {View, Text} from "react-native";
import {transferHistoryStyles} from "./TransferHistory.styles";
import {TransferCard} from "../transfer-card/TransferCard";

export function TransferHistory() {
  return (
    <View style={transferHistoryStyles.container}>
      <Text style={transferHistoryStyles.title}>Transferencias</Text>
      <View style={transferHistoryStyles.content}>
        <TransferCard/>
        <TransferCard/>
      </View>
    </View>
  );
}
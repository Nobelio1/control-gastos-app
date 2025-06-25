import {View, Text} from "react-native";
import {transferCardStyles} from "./TransferCard.styles";
import {Transaction, TransactionType} from "../../../types/form.types";
import {formatTransactionDate} from "../../../utils/dateUtils";

export function TransferCard({transaction}: { transaction: Transaction }) {
  const {description, date, amount, type} = transaction;

  const isIncome = (type: TransactionType) => {
    if (type === TransactionType.INCOME) {
      return '+';
    } else {
      return '-';
    }
  };

  return (
    <View style={transferCardStyles.container}>
      <View style={transferCardStyles.cardInfo}>
        <View style={
          isIncome(type) !== '+'
            ? transferCardStyles.iconCardOut
            : transferCardStyles.iconCardIn
        }>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>{description[0].toUpperCase()}</Text>
        </View>
        <View>
          <Text style={transferCardStyles.titleCard}>{description}</Text>
          <Text style={transferCardStyles.dateCard}>{formatTransactionDate(date)}</Text>
        </View>
      </View>
      <View>
        <Text style={
          isIncome(type) === '+'
            ? transferCardStyles.amountIn
            : transferCardStyles.amountOut}
        >
          {isIncome(type) + 'S/.' + amount}</Text>
      </View>
    </View>
  )
}
import {View, Text} from "react-native";
import {transferCardStyles} from "./TransferCard.styles";

export function TransferCard() {
  return (
    <View style={transferCardStyles.container}>
      <View style={transferCardStyles.cardInfo}>
        <View style={transferCardStyles.iconCardIn}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>O</Text>
        </View>
        <View>
          <Text style={transferCardStyles.titleCard}>Otro Ingreso</Text>
          <Text style={transferCardStyles.dateCard}>Domingo, 4 Jun. 2023</Text>
        </View>
      </View>
      <View>
        <Text style={transferCardStyles.amountIn}>+ $5.422,00</Text>
      </View>
    </View>
  )
}
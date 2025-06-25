import {View, Text, FlatList} from "react-native";
import {transferHistoryStyles} from "./TransferHistory.styles";
import {TransferCard} from "../transfer-card/TransferCard";
import {selectTransactions, useTransactionStore} from "../../../storage/transactionStore";

export function TransferHistory() {
  const transactions = useTransactionStore(selectTransactions);

  const EmptyComponent = () => (
    <View style={transferHistoryStyles.emptyContainer}>
      <Text style={transferHistoryStyles.emptyTitle}>No tienes transacciones</Text>
      <Text style={transferHistoryStyles.emptySubtitle}>
        Agrega tu primera transacción para comenzar
      </Text>
    </View>
  );

  const renderItem = ({item}: { item: any }) => (
    <TransferCard transaction={item}/>
  );

  return (
    <View style={transferHistoryStyles.container}>
      <Text style={transferHistoryStyles.title}>
        Transferencias ({transactions.length})
      </Text>

      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={
          transactions.length === 0
            ? transferHistoryStyles.emptyContentContainer
            : transferHistoryStyles.contentContainer
        }
        ListEmptyComponent={EmptyComponent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
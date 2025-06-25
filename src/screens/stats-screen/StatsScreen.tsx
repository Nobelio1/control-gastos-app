import React, {useMemo} from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from "../../components/shared/header-screen/Header";
import {statsScreenStyles} from "./StatsScreen.styles";
import {MonthSummaryCard} from "../../components/stats/MonthSummaryCard";
import {selectTransactions, useTransactionStore} from "../../storage/transactionStore";
import {TransactionType} from "../../types/form.types";
import {MonthlyStats, MonthlyStatsArray} from "../../types/monthyStats.types";

export default function StatsScreen() {
  const transactions = useTransactionStore(selectTransactions);

  const monthlyStats = useMemo((): MonthlyStatsArray => {
    const monthlyMap = new Map<string, MonthlyStats>();

    const months = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
      'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];

    transactions.forEach(transaction => {
      const date = new Date(transaction.date);
      const year = date.getFullYear();
      const monthNumber = date.getMonth();
      const monthKey = `${year}-${monthNumber}`;
      const monthName = `${months[monthNumber]}. ${year}`;

      if (!monthlyMap.has(monthKey)) {
        monthlyMap.set(monthKey, {
          month: monthName,
          year,
          monthNumber,
          income: 0,
          expense: 0,
          balance: 0,
          transactionCount: 0,
        });
      }

      const monthStats = monthlyMap.get(monthKey)!;
      monthStats.transactionCount++;

      if (transaction.type === TransactionType.INCOME) {
        monthStats.income += transaction.amount;
      } else {
        monthStats.expense += transaction.amount;
      }

      monthStats.balance = monthStats.income - monthStats.expense;
    });

    return Array.from(monthlyMap.values())
      .sort((a, b) => {
        if (a.year !== b.year) return b.year - a.year;
        return b.monthNumber - a.monthNumber;
      });
  }, [transactions]);

  return (
    <SafeAreaView style={statsScreenStyles.container}>
      <Header title={'Estadisticas'}/>
      <ScrollView
        style={statsScreenStyles.content}
        contentContainerStyle={statsScreenStyles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        {monthlyStats.map((month) => (
          <MonthSummaryCard key={`${month.year}-${month.monthNumber}`} month={month}/>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
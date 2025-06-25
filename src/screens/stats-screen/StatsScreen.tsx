import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from "../../components/shared/header-screen/Header";
import {statsScreenStyles} from "./StatsScreen.styles";
import {MonthSummaryCard} from "../../components/stats/MonthSummaryCard";

export default function StatsScreen() {
  return (
    <SafeAreaView style={statsScreenStyles.container}>
      <Header title={'Estadisticas'}/>
      <ScrollView
        style={statsScreenStyles.content}
        contentContainerStyle={statsScreenStyles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={true}
      >
        <MonthSummaryCard/>
        <MonthSummaryCard/>
        <MonthSummaryCard/>
        <MonthSummaryCard/>
        <MonthSummaryCard/>
        <MonthSummaryCard/>
        <MonthSummaryCard/>
      </ScrollView>
    </SafeAreaView>
  );
}

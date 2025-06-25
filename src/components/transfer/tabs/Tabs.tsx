import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';
import {tabsStyles} from "./Tabs.styles";

const {width: SCREEN_WIDTH} = Dimensions.get('window');

export function Tabs() {
  const [activeTab, setActiveTab] = useState<'income' | 'expense'>('income');
  const translateX = useSharedValue(0);
  const containerWidth = SCREEN_WIDTH - 40;
  const tabWidth = (containerWidth - 8) / 2;

  useEffect(() => {
    translateX.value = withSpring(
      activeTab === 'income' ? 4 : tabWidth + 4,
      {
        damping: 20,
        stiffness: 300,
        mass: 0.8,
      }
    );
  }, [activeTab, tabWidth]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <View style={tabsStyles.container}>
      <View style={[tabsStyles.tabContainer, {width: containerWidth}]}>
        <Animated.View style={[
          tabsStyles.slidingIndicator,
          {width: tabWidth},
          animatedStyle,
          activeTab === 'income' ? tabsStyles.incomeIndicator : tabsStyles.expenseIndicator
        ]}/>

        <TouchableOpacity
          style={[tabsStyles.tab, {width: tabWidth}]}
          onPress={() => setActiveTab('income')}
          activeOpacity={0.7}
        >
          <Text style={[
            tabsStyles.tabText,
            activeTab === 'income' && tabsStyles.activeTabText
          ]}>
            Ingresos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[tabsStyles.tab, {width: tabWidth}]}
          onPress={() => setActiveTab('expense')}
          activeOpacity={0.7}
        >
          <Text style={[
            tabsStyles.tabText,
            activeTab === 'expense' && tabsStyles.activeTabText
          ]}>
            Gastos
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import HomeScreen from '../screens/home-screen/HomeScreen';
import TransferScreen from '../screens/transfer-screen/TransferScreen';
import AddScreen from '../screens/add-screen/AddScreen';
import StatsScreen from '../screens/stats-screen/StatsScreen';
import SettingsScreen from "../screens/settings-screen/SettingsScreen";
import {COLORS_CORE, THEMES} from "../constants/colors";

const Tab = createBottomTabNavigator();

const CustomTabButton = ({children, onPress}: { children: any, onPress?: any }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={onPress}
  >
    <View style={{
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: THEMES[0].PRIMARY,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {children}
    </View>
  </TouchableOpacity>
);

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: 20,
          right: 20,
          backgroundColor: 'white',
          height: 70,
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={20}
                color={focused ? THEMES[0].PRIMARY : COLORS_CORE.OUTLINE_ICON}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Transfer"
        component={TransferScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Ionicons
                name={focused ? 'swap-horizontal' : 'swap-horizontal-outline'}
                size={20}
                color={focused ? THEMES[0].PRIMARY : COLORS_CORE.OUTLINE_ICON}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons
              name="add"
              size={24}
              color="white"
            />
          ),
          tabBarButton: (props) => (
            <CustomTabButton {...props} />
          ),
        }}
      />

      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Ionicons
                name={focused ? 'bar-chart' : 'bar-chart-outline'}
                size={20}
                color={focused ? THEMES[0].PRIMARY : COLORS_CORE.OUTLINE_ICON}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Ionicons
                name={focused ? 'settings' : 'settings-outline'}
                size={20}
                color={focused ? THEMES[0].PRIMARY : COLORS_CORE.OUTLINE_ICON}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = {
  shadow: {
    shadowColor: THEMES[0].PRIMARY,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
};
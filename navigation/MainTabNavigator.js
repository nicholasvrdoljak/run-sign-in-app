import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import LinksScreen from '../screens/LinksScreen';
import NewUserScreen from '../screens/NewUserScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Scan: ScanScreen,
  Links: LinksScreen,
  NewUser: NewUserScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

// export default createBottomTabNavigator({
//   HomeStack,
// });

export default HomeStack;
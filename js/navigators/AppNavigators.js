import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    DrawerItems,
    createSwitchNavigator
} from 'react-navigation'
import HomePage from '../page/HomePage'
import WelcomePage from '../page/WelcomePage'
import DetailPage from '../page/DetailPage'


import {Button, Platform, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    DetailPage: {
        screen: DetailPage
    },
});
const InitStack = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage
    },
}, {
    navigationOptions: {
        header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    }
});

export default createSwitchNavigator(
    {
        Init: InitStack,
        Main: MainNavigator,

        // APP:AppStack
    },
    {
        initialRouteName: 'Init',
        navigationOptions: {
            header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
        }
    }
);

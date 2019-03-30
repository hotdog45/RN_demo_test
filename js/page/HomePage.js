/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    createBottomTabNavigator
} from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyPage from './MyPage';
import PopularPage from './PopularPage';
import FavoritePage from './FavoritePage';
import TrendingPage from './TrendingPage';
import Page1 from "../../page/Page1";
import DynamicTabNavigator from '../navigators/DynamicTabNavigator'

type Props = {};
export default class HomePage extends Component<Props> {



    render() {

        return <DynamicTabNavigator/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

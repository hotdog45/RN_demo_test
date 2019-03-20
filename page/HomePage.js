/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


type Props = {};
export default class HomePage extends Component<Props> {
    static navigationOptions={
        title:'Home',
        headerBackTitle:'返回首页'
    }
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to HomePage !</Text>
                <Button title={'goto  Page1'} onPress={() => {
                    navigation.navigate('Page1',{name:'动态的'});
                }}/>
                <Button title={'goto Page2'} onPress={() => {
                    navigation.navigate('Page2');
                }}/>
                <Button title={'goto Page3'} onPress={() => {
                    navigation.navigate('Page3',{name:'devio'});
                }}/>

                <Button title={'goto top'} onPress={() => {
                    navigation.navigate('Tab');
                }}/>

                <Button title={'goto Bottom'} onPress={() => {
                    navigation.navigate('Bottom');
                }}/>
                <Button title={'goto DrawerNav'} onPress={() => {
                    navigation.navigate('DrawerNav');
                }}/>

            </View>
        );
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

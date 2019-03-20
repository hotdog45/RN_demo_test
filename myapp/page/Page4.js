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
export default class Page4 extends Component<Props> {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Page4 !</Text>
                <Button
                    onPress={() => navigation.openDrawer()}
                    title="Open drawer"
                />
                <Button
                    onPress={() => navigation.toggleDrawer()}
                    title="Toggle drawer"
                />
                <Button
                    onPress={() => navigation.closeDrawer()}
                    title="Go to Page4"
                />
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

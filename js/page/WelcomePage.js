/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationUtil from '../navigators/NavigationUtil'

type Props = {};
export default class WelcomePage extends Component<Props> {
    componentDidMount(): void {

        this.timer = setTimeout(() => {
            // const {navigation} = this.props;
            // navigation.navigate('Main')

            NavigationUtil.goMainPage(this.props.navigation)
        }, 2000)
    }

    componentWillUnmount(): void {
        this.timer && clearTimeout(this.timer)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to WelcomePage !</Text>

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

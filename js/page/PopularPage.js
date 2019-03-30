/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
    createMaterialTopTabNavigator,
    createAppContainer
} from 'react-navigation'
import NavigationUtil from '../navigators/NavigationUtil'


type Props = {};
export default class PopularPage extends Component<Props> {
    constructor(props){
        super(props);
        this.tabNames = ['java','android','ios','react','vue','rn']
    }

    _genTabs(){
        const tabs = {};
        this.tabNames.forEach((item,index)=>{
            tabs[`tabs${index}`]={
                screen:props => <PopularTab {...props} tabLabel = {item}/>,
                navigationOptions:{
                    title:item
                }

            }
        })
        return tabs;
    }

    render() {
        const  TabNavigtor = createAppContainer(createMaterialTopTabNavigator(
           this._genTabs(),
            {
                tabBarOptions: {
                    tabStyle: {
                        minWidth: 50
                    },
                    upperCaseLabel: false,//是否使标签大写，默认为true
                    scrollEnabled: true,//是否支持 选项卡滚动，默认false
                    // activeTintColor: 'white',//label和icon的前景色 活跃状态下（选中）
                    // inactiveTintColor: 'gray',//label和icon的前景色 活跃状态下（未选中）
                    style: {
                        backgroundColor: '#678',//TabBar 的背景颜色
                    },
                    indicatorStyle: {
                        height: 2,
                        backgroundColor: 'white',
                    },//标签指示器的样式
                    labelStyle: {
                        fontSize: 13,
                        marginTop: 6,
                        marginBottom: 6,
                    },//文字的样式
                },

            }
        ));
        const {navigation} = this.props;
        return (
            <View style={{flex: 1,marginTop:30}}>
                <TabNavigtor/>
            </View>
        );
    }
}

class PopularTab extends Component<Props> {

    render() {
        const {tabLabel}=this.props;
        return (<View style={styles.container}>
            <Text style={styles.welcome}>Welcome to {tabLabel} !</Text>


        </View>);
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

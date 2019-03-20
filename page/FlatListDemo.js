/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Button, StyleSheet, FlatList, Text,
    View,
    RefreshControl,
    ActivityIndicator
} from 'react-native';


type Props = {};
const CITY_NAME = ['北京', '上海', '广州', '深圳', '背景', '上海2', '广州2', '深圳2'];
export default class FlatListDemo extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataArr: CITY_NAME
        };

    }

    loadData(isLoading) {
        if (isLoading){
            this.setState({
                isLoading: true
            });
        }


        setTimeout(() => {
            let arr = [];
            if (isLoading){
                for (let i = this.state.dataArr.length - 1; i >= 0; i--) {
                    arr.push(this.state.dataArr[i]);
                }
            } else {
                arr = this.state.dataArr.concat(CITY_NAME);
            }

            this.setState({
                isLoading: false,
                dataArr: arr
            });
        }, 2000);
    }


    _renderItem(data) {
        return <View style={styles.item}>
            <Text>{data.item}</Text>
        </View>

    }

    genIndicator() {
        return <View>
            <ActivityIndicator
                size={'large'}
                animating={true}
                color={'red'}
            />
            <Text>正在加载更多</Text>

        </View>
    }



    render() {
        return (
            <View style={styles.container}>
                <FlatList renderItem={(data) => this._renderItem(data)} data={this.state.dataArr}
                    // refreshing={this.state.isLoading}
                    // onRefresh={() => {
                    //     this.loading();
                    // }}
                          refreshControl={
                              <RefreshControl

                                  title={'测试刷新'}
                                  titleColor={'red'}
                                  colors={['red']}
                                  tintColor={'green'}
                                  refreshing={this.state.isLoading}
                                  onRefresh={() => {
                                      this.loadData(true);
                                  }}
                              />
                          }
                          ListFooterComponent={() => this.genIndicator()}
                          onEndReached={()=>this.loadData(false)}
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
    item: {
        backgroundColor: 'green',
        height: 200,
        marginHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    }
});

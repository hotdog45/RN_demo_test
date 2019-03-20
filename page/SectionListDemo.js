/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    SectionList,
    Text,
    View,
    RefreshControl,
    ActivityIndicator
} from 'react-native';


type Props = {};
const CITY_NAME = [
    {data: ['北京', '上海', '广州', '深圳'],title:'一线'},
    {data: ['西安', '杭州', '天津', '成都'],title:'二线'},
    {data: ['西安3', '杭州3', '天津3', '成都3'],title:'三四线'}];
export default class SectionListDemo extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataArr: CITY_NAME
        };

    }

    loadData(isLoading) {
        if (isLoading) {
            this.setState({
                isLoading: true
            });
        }


        setTimeout(() => {
            let arr = [];
            if (isLoading) {
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
    _renderHeader({section}){
        return <View style={styles.sectionHeader}>
            <Text style={styles.sectionText}>
                {section.title}
            </Text>
        </View>
    }


    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    renderItem={(data) => this._renderItem(data)}
                    sections={this.state.dataArr}
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
                    onEndReached={() => this.loadData(false)}
                    renderSectionHeader={(data)=>this._renderHeader(data)}
                    ItemSeparatorComponent={()=><View style={styles.line}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fafafa'

    },
    item: {
        backgroundColor: 'green',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionHeader:{
        height: 50,
        backgroundColor: '#978',
        justifyContent:'center',
        alignItems: 'center',

    },
    line:{
        height:1,
        backgroundColor:'#215'
    }
});

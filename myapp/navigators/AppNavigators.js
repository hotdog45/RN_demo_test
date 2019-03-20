import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    DrawerItems,
    createSwitchNavigator
} from 'react-navigation'
import HomePage from '../page/HomePage'
import Login from '../page/Login'
import Page1 from '../page/Page1'
import Page2 from '../page/Page2'
import Page3 from '../page/Page3'
import Page4 from '../page/Page4'
import Page5 from '../page/Page5'
import {Button, Platform,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';


const AppStack=createStackNavigator({
    HomePage:{
        screen:HomePage
    },
    Page1:{
        screen:Page1
    }
})
const AuthStack = createStackNavigator({
    Login: {
        screen: Login
    },
},{
    navigationOptions: {
        // header: null,// 可以通过将header设为null 来禁用StackNavigator的Navigation Bar
    }
});
export default createSwitchNavigator(
    {
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'Auth',
    }
);
const DrawerNav = createDrawerNavigator({

        Page4: {
            screen: Page4,
            navigationOptions: {
                drawerLabel: 'Page4',
                drawerIcon: ({tintColor}) => {
                    return <MaterialIcons
                        name={'whatshot'}
                        size={26}
                        style={{color: tintColor}}
                    />
                }
            }
        },
        Page5: {
            screen: Page5,
            navigationOptions: {
                drawerLabel: 'Page5',
                drawerIcon: ({tintColor}) => {
                    return <MaterialIcons
                        name={'whatshot'}
                        size={26}
                        style={{color: tintColor}}
                    />
                }
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                drawerLabel: 'Page2',
                drawerIcon: ({tintColor}) => {
                    return <MaterialIcons
                        name={'whatshot'}
                        size={26}
                        style={{color: tintColor}}
                    />
                }
            }
        }
    },
    {
        initialRouteName: 'Page4',
        contentOptions: {
            activeTintColor: '#e91e63',
        },
        contentComponent: (props) => (
            <ScrollView style={{backgroundColor:'#789',flex:1}}>
                <SafeAreaView forceInset={{top:'always',horizontal:'never'}}>
                    <DrawerItems {...props} />
                </SafeAreaView>
            </ScrollView>
        )
    }
)
const AppTopNavigator = createMaterialTopTabNavigator({
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: 'All'
            }
        },
        Page4: {
            screen: Page4,
            navigationOptions: {
                tabBarLabel: 'iOS'
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: 'react'
            }
        }
    },
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
)
const AppBottomNavigator = createBottomTabNavigator({
    Page1: {
        screen: Page1,
        navigationOptions: {
            tabBarLabel: '主页',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    Page2: {
        screen: Page2,
        navigationOptions: {
            tabBarLabel: '收藏',
            tabBarIcon: ({tintColor, focused}) => (
                <Entypo
                    name={'user'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: {
            tabBarLabel: '购物车',
            tabBarIcon: ({tintColor, focused}) => (
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    }
})

export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    Login: {
        screen: Login
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({navigation}) => ({
            title: '${navigation.state.params.name}页面名'//动态配置
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: ({
            title: '第二页'//静态配置
        })
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'This is Page3',
                headerRight: (
                    <Button
                        title={params.mode === 'edit' ? '保存' : '编辑'}
                        onPress={() =>
                            setParams({mode: params.mode === 'edit' ? '' : 'edit'})}
                    />
                ),
            }
        }


    },
    Page4: {
        screen: Page4
    },
    Page5: {
        screen: Page5
    },
    Bottom: {
        screen: AppBottomNavigator,
        navigationOptions: ({
            title: 'AppBottomNavigator'//静态配置
        })
    },
    Tab: {
        screen: AppTopNavigator,
        navigationOptions: ({
            title: 'AppBottomNavigator'//静态配置
        })
    },
    DrawerNav: {
        screen: DrawerNav,
        navigationOptions: ({
            title: 'DrawerNav'//静态配置
        })
    },
})

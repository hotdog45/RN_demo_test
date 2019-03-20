/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {AppStackNavigator} from './navigators/AppNavigators';
import AppNavigator from './navigators/AppNavigators';

import {createAppContainer} from 'react-navigation'
import {name as appName} from './app.json';
const AppNavigatorContainer = createAppContainer(AppNavigator);
AppRegistry.registerComponent(appName, () => AppNavigatorContainer);
// AppRegistry.registerComponent(appName, () => App);

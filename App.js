import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Constants from 'expo-constants';

import LoginScreen from './components/LoginScreen'
import ChatScreen from './components/ChatScreen'

const AppNavigator = createStackNavigator(
  {
    Login:LoginScreen,
    Chat: ChatScreen,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(AppNavigator);
import  AuthScreen  from './AuthScreen';
import  HomeScreen  from './HomeScreen';
import {createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Auth: AuthScreen
  },
  {
    initialRouteName: "Home"
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
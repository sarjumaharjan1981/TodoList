import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, CheckBox,Switch,Button,TouchableOpacity } from 'react-native';
import leftPad from 'left-pad';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AppContainer from './MyNavigator';


export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}
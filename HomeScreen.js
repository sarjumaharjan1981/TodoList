import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, CheckBox,Switch,Button,TouchableOpacity } from 'react-native';
import TodoItem from './TodoItem';
import dataFromFile from './data.json';
import AuthScreen from './AuthScreen';

export default class TodoList extends React.Component {

    constructor(props){
      super(props);
      // this._createTask = this._createTask.bind(this);
      this.state = {
        checked: false
      };
      
    }
  
    showHeader(){
      return <TouchableOpacity
        style =  {styles.button}
        onPress={()=>{
          const {navigate} = this.props.navigation;
        }}
        backgroundColor= 'blue'
        >
          <Text
            style={styles.text}
          >Create New Task</Text>
        </TouchableOpacity>
    }

    // _createTask = ()=>{
    //   console.log("ajsdhgfda");
    // }

    _createTask(){
      console.log("test");
      // const {navigate} = this.props.props.navigation;
      // navigate(AuthScreen);
    }
    
    render() {
      return (
        <View style={{
          flex:1,
          paddingTop:40,
        }}>
          <FlatList
            data={dataFromFile.data}
            renderItem={({item}) => <TodoItem checked={false} title={item.title} />}
            ListHeaderComponent={this.showHeader}
            stickyHeaderIndices={[0]}
          />
          
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    button:{
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#1E6738',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff'
    },
    text:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }
  })
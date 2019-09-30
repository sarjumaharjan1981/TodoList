import React, { Component } from 'react';
import { Text, Switch, View } from 'react-native';

export default class TodoItem extends React.Component {

    constructor(props){
        super(props);
        this.state={
            checked:props.checked
        }
    }

    render(){
        return(
        <View style={{
            flexDirection:"row",
            paddingBottom:5
        }}>
            <Switch
                value={this.state.checked}
                onValueChange={()=>this.setState({checked:!this.state.checked})}
                style={{
                    height:30
                }}
            />
            <Text style={{
                paddingTop:5,
            }}>{this.props.title}</Text>
        </View>
        );
    }
}
import React from 'react';
import {View, Text} from 'react-native';

export default class Home extends React.Component {
  render() {
    console.log('heres home');
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
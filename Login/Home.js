import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends React.Component {
  render() {
    console.log('heres home');
    return (
      <View>
        <Text>Home Screen</Text>
        <Button onPress={()=>{console.log('f yeah')}} title='Go Back'/>
      </View>
    );
  }
}
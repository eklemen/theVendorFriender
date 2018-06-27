import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends React.Component {
  render() {
    console.log('heres home');
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          onPress={()=>{this.props.navigation.navigate('Logout')}}
          title='Go Back'/>
      </View>
    );
  }
}
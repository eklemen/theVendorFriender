import React from 'react';
import {StyleSheet, Text, View, Button, Linking} from 'react-native';
import Routes from './Routes';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

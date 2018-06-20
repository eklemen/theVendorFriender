import React from 'react';
import {View, Text, StyleSheet, Button, Linking} from 'react-native';
import SafariView from "react-native-safari-view";

export default class HomeScreen extends React.Component {
  componentDidMount() {
    console.log('login');
    Linking.addEventListener('url', this._handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  _handleOpenURL = async e => {
    console.log('event=====', e);
    const code = e.url.split('=')[1];
    await 
    await SafariView.dismiss();
  };

  _logMeIn = () => {
    SafariView.isAvailable()
      .then(
        SafariView.show({
          url: 'http://localhost:8080/auth/instagram?provider=instagram',
          fromBottom: true
        })
      )
      .catch(error => {
        // Fallback WebView code for iOS 8 and earlier
        console.log(error);
      });
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button title='Login' onPress={this._logMeIn}/>
        <Text>Hi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  text: {
    fontSize: 24,
    marginBottom: 18
  }
});
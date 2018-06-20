import React from 'react';
import {View, Text, StyleSheet, Button, Linking} from 'react-native';
import SafariView from "react-native-safari-view";

export default class HomeScreen extends React.Component {
  componentDidMount() {
    Linking.addEventListener('url', this._handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  _handleOpenURL(event) {
    console.log('event=====', event);
    // SafariView.isAvailable()
    //   .then(
    //     SafariView.show({
    //       url: 'http://localhost:8080/auth/instagram?provider=instagram',
    //       fromBottom: true
    //     })
    //   )
    //   .catch(error => {
    //     // Fallback WebView code for iOS 8 and earlier
    //   });
    // // Linking.addEventListener('url', (r) => {
    // //   console.log('response.......', r);
    // // })
    // SafariView.show({
    //   url: 'http://localhost:8080/auth/instagram?provider=instagram',
    //   fromBottom: true
    // });
    // Linking.addEventListener('url', this.handleUrl)
  }
  // handleUrl = (event) => {
  //   console.log('event from handleUrl', event);
  //   //remove listener here as it makes sense rather than doing it in component
  //   Linking.removeEventListener('url', this.handleUrl);
  //
  //   SafariView.dismiss();
  //
  // }
  _logMeIn = (e) => {
    Linking.canOpenURL('http://localhost:8080/auth/instagram?provider=instagram')
      .then(supported => {
        if (supported) {
          return Linking.openURL('http://localhost:8080/auth/instagram?provider=instagram');
        } else {
          console.error('Failed to open URI:', 'http://localhost:8080/auth/instagram?provider=instagram');
        }
      })
      .catch(error => {
        console.error(error);
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
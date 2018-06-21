import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, Button, Linking} from 'react-native';
import SafariView from 'react-native-safari-view';
import {getToken} from '../services/UserService';

class Login extends React.Component {
  componentDidMount() {
    console.log('login');
    Linking.addEventListener('url', this._handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  _handleOpenURL = async (e) => {
    const code = e.url.split('=')[1];
    const {navigation, getToken} = this.props;
    try {
      const token = await getToken(code);
      console.log('TOKEN', token);
      SafariView.dismiss();
    } catch (err) {
      console.log(err);
    }
    // console.log('code', code);
    // navigation.navigate('AuthUser', {code});
    // this.props.getToken(code).then(res => {
    //   console.log('RES ', res);
    // }).catch(err => {
    //   console.log(err);
    // })
  };

  _logMeIn = async () => {
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
        <Button title='Login' onPress={() => this._logMeIn().done()}/>
        <Text>Hi</Text>
      </View>
    );
  }
}

const actions = {
  getToken
};

export default connect(null, actions)(Login);

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
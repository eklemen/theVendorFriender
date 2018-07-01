import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Linking, View, Dimensions} from 'react-native';
import {Button, Content, Icon, Text} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';
import SafariView from 'react-native-safari-view';
import LinearGradient from 'react-native-linear-gradient';
import {getTokenFromCode} from '../services/UserService';

class Login extends React.Component {
  componentDidMount() {
    console.log('login');
    Linking.addEventListener('url', this._handleOpenURL);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleOpenURL);
  }

  _handleOpenURL = () => {
    SafariView.dismiss();
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
      <LinearGradient
        colors={['#d7dce5', '#8cb8ff']}
        start={{x: 0.1, y: 0.15}}
        end={{x: 1, y: 0.8}}
        style={styles.container}>
        <Button transparent dark block large iconLeft onPress={this._logMeIn}>
          <Icon type='FontAwesome' name='instagram' style={{fontSize: 40, color: '#e95950'}}/>
          <Text>Login with Instagram</Text>
        </Button>
      </LinearGradient>
    );
  }
}

const actions = {
  getToken: getTokenFromCode
};

export default connect(null, actions)(Login);

const styles = StyleSheet.create({
  title: {
    alignItems: 'flex-end'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  }
});
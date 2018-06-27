import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Button, Linking} from 'react-native';
import {Container, Header, Content, Body, Title} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';
import SafariView from 'react-native-safari-view';
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
      <Content>
        <Grid>
          <Row style={{backgroundColor: '#635DB7', height: 200}}>Hi</Row>
          <Row style={{backgroundColor: '#00CE9F', height: 200}}>
            <Button title='Login' onPress={this._logMeIn}/>
          </Row>
        </Grid>
      </Content>
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
  }
});
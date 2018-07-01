import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Linking} from 'react-native';
import {Button, Content, Icon, Text} from 'native-base';
import {Row, Grid} from 'react-native-easy-grid';
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
      <Grid>
        <Row style={{alignItems: 'center'}}>
          <Content padder>
            <Button light block large iconLeft onPress={this._logMeIn}>
              <Icon type='FontAwesome' name='instagram'/>
              <Text>Login with Instagram</Text>
            </Button>
          </Content>
        </Row>
      </Grid>
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
import React, {Component} from 'react';
import {connect} from 'compdata';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {getTokenFromCode} from '../services/UserService';
import {setToken} from '../shared/AuthRoute';
import SafariView from "react-native-safari-view";

class AuthUser extends Component {

  async componentDidMount() {
    const {navigation, getToken} = this.props;
    const code = navigation.getParam('code', '');
    try {
      const res = await getToken(code);
      const {token} = res.payload.data;
      await setToken(token);
      // navigation.navigate('Home');
      await SafariView.dismiss();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading user info...</Text>
      </View>
    );
  }
}

const actions = {
  getToken: getTokenFromCode
};

export default connect(
  null, actions
)(AuthUser, 'UserInfo');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

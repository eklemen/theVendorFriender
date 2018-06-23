import React, {Component} from 'react';
import {connect} from 'compdata';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
} from 'react-native';
import {getToken} from '../services/UserService';

class AuthUser extends Component {

  async componentDidMount() {
    const {navigation, getToken} = this.props;
    const code = navigation.getParam('code', '');
    try {
      const res = await getToken(code);
      const {token} = res.payload.data;
      await AsyncStorage.setItem('@vendorToken', token);
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
  getToken
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

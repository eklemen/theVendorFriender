import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {NavigationActions} from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';
import {getSelf} from '../services/UserService';
import {createRootNavigator} from '../Routes';

class AuthRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  async componentDidMount() {
    try {
      const token = await getToken();
      if (!token) {
        this.setState({signedIn: false, checkedSignIn: true});
      } else {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        await this.props.getSelf();
        await this.setState({signedIn: true, checkedSignIn: true})
      }
    } catch (err) {
      console.log('err authroute------------\n\r', err);
    }
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;
  }
}

const mapStateToProps = state => ({
  user: state.Queries.User
});

const actions = {
  getSelf
};

export default connect(
  mapStateToProps, actions
)(AuthRoute);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const setToken = (token) => AsyncStorage.setItem('@vendorToken', token);
export const getToken = () => AsyncStorage.getItem('@vendorToken');

export const onSignOut = () => AsyncStorage.removeItem('@vendorToken');

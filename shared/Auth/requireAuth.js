import React from 'react';
import {AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';
import {getSelf} from '../../services/UserService';
import AsyncSpinner from '../AsyncSpinner';

export default function(ProtectedRoute) {
  class Authentication extends React.Component {
    constructor(props) {
      super(props);
    }
    async componentDidMount() {
      await this._checkAuth();
      await this._checkUser();
    }
    _checkAuth = async () => {
      const { navigation } = this.props;
      try {
        const token = await getToken();
        if(token && !axios.defaults.headers.common['Authorization']) {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        }
        if(!token) navigation.navigate('Logout');
      } catch (err) {
        console.log('_checkToken err: ', err);
      }
    };

    _checkUser = async () => {
      const {user, getSelf} = this.props;
      if(!user || !user.data) {
        await getSelf();
      }
    };

    render() {
      return (
        <AsyncSpinner dataObj={this.props.user}>
          <ProtectedRoute { ...this.props } />
        </AsyncSpinner>
      );
    }
  }

  const mapStateToProps = state => ({
      user: state.Queries.User
  });
  const actions = {
    getSelf
  };

  return connect(mapStateToProps, actions)(Authentication);
}

export const setToken = (token) => AsyncStorage.setItem('@vendorToken', token);
export const getToken = () => AsyncStorage.getItem('@vendorToken');

export const onSignOut = () => AsyncStorage.removeItem('@vendorToken');
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import Routes from './Routes';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Container>
          <Routes/>
        </Container>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

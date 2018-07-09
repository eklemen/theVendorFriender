import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {StyleSheet, View} from 'react-native';
import { Row, Grid } from "react-native-easy-grid";
import {Container} from 'native-base';
import Routes from './Routes';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Container style={styles.container}>
            <Routes />
        </Container>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
});

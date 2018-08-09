import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {StyleSheet} from 'react-native';
import {Container, Root} from 'native-base';
import Routes from './Routes';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Root>
          <Container>
            <Routes/>
          </Container>
        </Root>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});

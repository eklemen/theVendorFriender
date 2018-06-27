import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {StyleSheet, View} from 'react-native';
// import Routes from './Routes';
import AuthRoute from './shared/AuthRoute';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <AuthRoute />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

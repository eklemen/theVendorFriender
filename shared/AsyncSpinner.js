import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Spinner} from 'native-base';

export default class AsyncSpinner extends Component {

  render() {
    const {children, dataObj} = this.props;
    if (!dataObj) return null;
    if (dataObj.fetching) return (<Spinner/>);
    if (dataObj.error) {
      return (<Text>Something went wrong...</Text>);
    }
    if (dataObj.fetched && dataObj.data) {
      return (
        <View style={styles.container}>
          {...children}
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

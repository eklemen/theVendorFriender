import React, {Component} from 'react';
import {View, Text} from 'native-base';
import {Spinner} from 'native-base';

export default class AsyncSpinner extends Component {

  render() {
    const {children, waitFor, ...rest} = this.props;
    if (Array.isArray(waitFor)) {
      if (!waitFor.length) return null;
      const checkFetch = (s) => s.fetching;
      if (waitFor.some(checkFetch)) return (<Spinner/>);
      const checkErr = (s) => !!s.error;
      if (waitFor.some(checkErr)) {
        return (<Text>Something went wrong...</Text>);
      }
      const allGood = (s) => s.fetched && s.data;
      if (allGood) {console.log('allgood')}
    }
    if (!waitFor) return null;
    if (waitFor.fetching) return (<Spinner/>);
    if (waitFor.error) {
      return (<Text>Something went wrong...</Text>);
    }
    if (waitFor.fetched && waitFor.data) {
      return (
        <View style={{...rest}}>
          {...children}
        </View>
      );
    }
    return null;
  }
}

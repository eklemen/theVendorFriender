import React, {Component} from 'react';
import {View, Text} from 'native-base';
import {Spinner} from 'native-base';

export default class AsyncSpinner extends Component {

  render() {
    const {children, waitFor, ...rest} = this.props;
    if (typeof waitFor)
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

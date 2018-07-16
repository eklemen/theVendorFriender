import React, {Component} from 'react';
import {View, Text} from 'native-base';
import {Spinner} from 'native-base';

export default class AsyncSpinner extends Component {

  render() {
    const {children, dataObj, ...rest} = this.props;
    if (!dataObj) return null;
    if (dataObj.fetching) return (<Spinner/>);
    if (dataObj.error) {
      return (<Text>Something went wrong...</Text>);
    }
    if (dataObj.fetched && dataObj.data) {
      return (
        <View style={{...rest}}>
          {...children}
        </View>
      );
    }
    return null;
  }
}

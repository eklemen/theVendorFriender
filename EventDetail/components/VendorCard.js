import React, {Component} from 'react';
import {
  Card, CardItem, Left, Thumbnail, Body, Text
} from 'native-base';
import {layout} from '../../shared/styles';

export default class VendorCard extends Component {

  render() {
    const {event} = this.props;
    console.log(event);
    return (
      <Card style={[layout.withPad, {height: 'auto'}]}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: event.user.igPic}}/>
            <Body>
            <Text>NativeBase</Text>
            <Text note>GeekyAnts</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

import React from 'react';
import {
  ListItem, Text, Body, Right, Button
} from 'native-base';
import {connect} from 'compdata';
import format from 'date-fns/format';

const EventItem = (
  {
    event, event: {title, eventDate, venue}, setData, navigation
  }) => {
  _selectEvent = async () => {
    await setData({event});
    navigation.navigate('EventDetail');
  };
  return (
    <ListItem onPress={this._selectEvent}>
      <Body>
      <Text>{venue}</Text>
      <Text note numberOfLines={1}>{title}</Text>
      </Body>
      <Right>
        <Text>{format(eventDate, 'MMM Do')}</Text>
        <Text note>{format(eventDate, 'ddd')}</Text>
      </Right>
    </ListItem>
  );
};

export default connect(null)(EventItem, 'EventDetail');

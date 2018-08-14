import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  ListItem, Text, Body, Right, Left, Thumbnail, ActionSheet, Toast
} from 'native-base';
import {layout} from '../../shared/styles';
import {reportUser} from '../../services/EventsService';
import {addContact} from '../../services/UserService';

class VendorCard extends Component {

  render() {
    const {attendee:{user}, attendee, isHost, handleSelect} = this.props;
    if (!attendee || !user) return null;
    let color = {};
    if (isHost) color = {color: 'red'};
    return (
      <ListItem onPress={handleSelect}>
        <Left style={[layout.flex1]}>
          <Thumbnail source={{uri: user.igPic}}/>
        </Left>
        <Body style={[layout.flex3]}>
        <Text>{user.igUsername}</Text>
        <Text
          note
          numberOfLines={2}
          style={{...color}}
        >
          {attendee.memberRole}
        </Text>
        </Body>
        <Right style={[layout.flex1]}>
          <Text>{attendee.service}</Text>
        </Right>
      </ListItem>
    );
  }
}

const actions = {
  reportUser,
  addContact
};

export default connect(null, actions)(VendorCard);
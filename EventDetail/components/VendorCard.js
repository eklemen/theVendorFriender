import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  ListItem, Text, Body, Right, Left, Thumbnail, ActionSheet, Toast
} from 'native-base';
import {layout} from '../../shared/styles';
import {reportUser} from '../../services/EventsService';
import {addContact} from '../../services/UserService';

class VendorCard extends Component {
  constructor() {
      super();
    this.BUTTONS = [
      'Add to Contacts',
      'Copy Instagram Username',
      'Report',
      'Cancel'
    ];
    this.DESTRUCTIVE_INDEX = 2;
    this.CANCEL_INDEX = 3;
  }
  _selectUser = memberId => () => {
    console.log('memberId', memberId);
    ActionSheet.show(
      {
        options: this.BUTTONS,
        cancelButtonIndex: this.CANCEL_INDEX,
        destructiveButtonIndex: this.DESTRUCTIVE_INDEX,
        title: "Testing ActionSheet"
      },
      buttonIndex => {
        this.setState({ clicked: this.BUTTONS[buttonIndex] }, () => {
          console.log('buttonIndex------------\n\r', buttonIndex);
        });
        const {
          reportUser,
          addContact,
          attendee:{user},
          eventId
        } = this.props;
        if(buttonIndex === 0) {
          addContact(user.uuid).then(res => {
            console.log(res);
            const success = res.type === 'QUERY_FULFILLED_Contacts';
            const msg = success
              ? `${user.igUsername} was added to Contacts`
              : 'Something went wrong.';
            const toastType = success ? 'success' : 'danger';
            Toast.show({
              text: msg,
              buttonText: 'x',
              type: toastType,
              duration: 2000
            })
          });
        }
        if(buttonIndex === 2) {
          reportUser(eventId, user.uuid).then(res => {
            Toast.show({
              text: res.payload.data.message || 'Something went wrong.',
              buttonText: 'x',
              duration: 2000
            })
          });
        }
      }
    )
  };

  render() {
    const {attendee:{user}, attendee, isHost} = this.props;
    if (!attendee || !user) return null;
    let color = {};
    if (isHost) color = {color: 'red'};
    return (
      <ListItem onPress={this._selectUser(user.uuid)}>
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
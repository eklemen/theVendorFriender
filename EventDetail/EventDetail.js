import React, {Component} from 'react';
import {Text, H3, List, Card, CardItem, Body, Button} from 'native-base';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {connect} from 'compdata';
import {layout} from '../shared/styles';
import {getEventDetails} from '../services/EventsService';
import {AsyncSpinner} from '../shared';
import {VendorCard, VendorActionSheet} from './components';

class EventDetail extends Component {
  constructor() {
      super();
      this.state = {
        showModal: false,
        selectedUser: {user: {}}
      };
  }
  componentDidMount() {
    const {event, navigation, getEventDetails} = this.props;
    if (!event) navigation.goBack();
    getEventDetails(event.uuid);
  }

  _selectUser = selectedUser => () => {
    this.setState({
      showModal: true,
      selectedUser
    });
  };

  _closeModal = () => {
    this.setState({showModal: false, selectedUser: {user: {}}})
  };

  render() {
    const {event, eventDetails} = this.props;
    const {showModal, selectedUser} = this.state;
    if (!event) return null;

    let attendees = [];
    let host = {};
    if (eventDetails && eventDetails.data) {
      eventDetails.data.attendees.forEach(a => {
        if (a.memberRole === 'client') {
          host = a;
        } else {
          attendees.push(a);
        }
      })
    }

    return (
      <View style={[layout.centerPad, layout.marTop]}>
        <Text>Event details for {event.title}</Text>
        <Text>At {event.venue}</Text>
        <AsyncSpinner waitFor={eventDetails}>
          <View style={[layout.withPad]}>
            <H3>Event Attendees</H3>
            <List>
              { host.user &&
                <VendorCard
                  attendee={host}
                  isHost
                  eventId={event.uuid}
                  handleSelect={this._selectUser(host)}
                />
              }
              {
                attendees.map(a => {
                  return (
                    <VendorCard
                      attendee={a}
                      eventId={event.uuid}
                      key={a.user.uuid}
                      handleSelect={this._selectUser(a)}
                    />
                  )
                })
              }
            </List>
          </View>
        </AsyncSpinner>
        <VendorActionSheet
          isVisible={showModal}
          closeModal={this._closeModal}
          event={event}
          selectedUser={selectedUser}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  event: state.CompData.EventDetail.event,
  eventDetails: state.Queries.EventDetails,
  myContacts: state.Queries.MyContacts,
});

const actions = {
  getEventDetails
};

export default connect(
  mapStateToProps,
  actions
)(EventDetail, 'EventDetail');

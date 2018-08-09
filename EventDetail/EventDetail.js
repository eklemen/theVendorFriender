import React, {Component} from 'react';
import {View, Text, H3, List} from 'native-base';
import {connect} from 'compdata';
import {layout} from '../shared/styles';
import {getEventDetails} from '../services/EventsService';
import {AsyncSpinner} from '../shared';
import {VendorCard} from './components';

class EventDetail extends Component {
  componentDidMount() {
    const {event, navigation, getEventDetails} = this.props;
    if (!event) navigation.goBack();
    getEventDetails(event.uuid);
  }

  render() {
    const {event, eventDetails} = this.props;
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
              <VendorCard attendee={host} isHost eventId={event.uuid}/>
              {
                attendees.map(a => {
                  return (
                    <VendorCard attendee={a} eventId={event.uuid}/>
                  )
                })
              }
            </List>
          </View>
        </AsyncSpinner>
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

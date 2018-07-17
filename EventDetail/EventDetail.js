import React, {Component} from 'react';
import {View, Text, H3} from 'native-base';
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
    console.log('eventDetails', eventDetails);
    return (
      <View style={[layout.centerPad, layout.marTop]}>
        <Text>Event details for {event.title}</Text>
        <Text>At {event.venue}</Text>
        <AsyncSpinner waitFor={eventDetails}>
          <View>
            <H3>Event Attendees</H3>
            {
              eventDetails && eventDetails.data
              && eventDetails.data.attendees.map(e => {
                return (
                  <VendorCard event={e}/>
                )
              })
            }
          </View>
        </AsyncSpinner>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  event: state.CompData.EventDetail.event,
  eventDetails: state.Queries.EventDetails
});

const actions = {
  getEventDetails
};

export default connect(
  mapStateToProps,
  actions
)(EventDetail, 'EventDetail');

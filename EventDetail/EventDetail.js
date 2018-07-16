import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import {connect} from 'compdata';

class EventDetail extends Component {
  componentDidMount() {
    const {event, navigation} = this.props;
    if (!event) navigation.goBack();
  }

  render() {
    const {event} = this.props;
    if (!event) return null;
    return (
      <View style={{marginTop: 50}}>
        <Text>Event details for {event.title}</Text>
        <Text>At {event.venue}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  event: state.CompData.EventDetail.event
});

export default connect(
  mapStateToProps
)(EventDetail, 'EventDetail');

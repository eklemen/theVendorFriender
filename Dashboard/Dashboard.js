import React from 'react';
import {connect} from 'compdata';
import format from 'date-fns/format';
import {View, Text, Button, List, H3} from 'native-base';
import {AsyncSpinner} from '../shared';
import {layout} from '../shared/styles';
import {getMyEventsList, getOwnContacts} from '../services/UserService';
import {EventItem} from './components';

class Dashboard extends React.Component {
  componentDidMount() {
    const {getMyEventsList, getOwnContacts, user} = this.props;
    getMyEventsList();
    getOwnContacts(user.data.uuid);
  }

  render() {
    const {myEvents, navigation} = this.props;
    const today = format(new Date(), 'MM/DD/YYYY');
    return (
      <View>
        <View style={[layout.centerPad]}>
          <Text>My Dashboard</Text>
          <Text>Date: {today}</Text>
          <H3>My Events</H3>
        </View>
        <AsyncSpinner waitFor={myEvents}>
          <View>
            <List>
              {myEvents && myEvents.data && myEvents.data.map(({event}) => (
                <EventItem
                  key={event.uuid}
                  event={event}
                  navigation={navigation}
                />
              ))}
            </List>
          </View>
        </AsyncSpinner>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Logout')
          }}
          title='Go Back'/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.Queries.User,
  myEvents: state.Queries.MyEventsList || {}
});

const actions = {
  getMyEventsList,
  getOwnContacts
};

// export default connect(mapStateToProps, actions)(Dashboard, 'Dashboard');
export default connect(
  mapStateToProps, actions
)(Dashboard, 'Dashboard');
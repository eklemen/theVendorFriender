import React from 'react';
import {connect} from 'compdata';
import {View, Text, Button, StyleSheet} from 'react-native';
import format from 'date-fns/format';
import {List, Content} from 'native-base';
import {AsyncSpinner} from '../shared';
import {layout} from '../shared/styles';
import {getMyEventsList} from '../services/UserService';
import {EventItem} from './components';

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getMyEventsList()
  }

  render() {
    const {myEvents} = this.props;
    const today = format(new Date(), 'MM/DD/YYYY');
    return (
      <View style={{marginTop: 50, ...layout.Col, ...layout.withPad}}>
        <Text>My Dashboard</Text>
        <Text>Date: {today}</Text>
        <AsyncSpinner dataObj={myEvents}>
          <View  style={{...layout.Col, ...layout.withPad}}>
            <Text>My Events</Text>
              <List>
                {myEvents && myEvents.data && myEvents.data.map((e, i) => (
                  <EventItem key={i}/>
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

const styles = StyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  flexCol: {
    display: 'flex',
    flexDirection: 'column'
  }
});

const mapStateToProps = state => ({
  user: state.Queries.User,
  myEvents: state.Queries.MyEventsList || {}
});

const actions = {
  getMyEventsList
};

// export default connect(mapStateToProps, actions)(Dashboard, 'Dashboard');
export default connect(
  mapStateToProps, actions
)(Dashboard, 'Dashboard');
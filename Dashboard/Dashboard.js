import React from 'react';
import {connect} from 'compdata';
import {View, Text, Button} from 'react-native';
import {Spinner} from 'native-base';
class Dashboard extends React.Component {
  // static navigationOptions = {
  //   headerTitle: 'Dashboard',
  // };
  // componentDidMount() {
  //
  // }

  render() {
    console.log('heres Dashboard', this.props.user);
    {/*<Spinner />*/}
    return (
      <View style={{marginTop: 50}}>
        <Text>Dashboard Screen</Text>
        <Button
          onPress={()=>{this.props.navigation.navigate('Logout')}}
          title='Go Back'/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
    user: state.Queries.User || {}
});

const actions = {};

const connected = connect(mapStateToProps, actions)(Dashboard, 'Dashboard');

connected.navigationOptions = () => ({
  title: 'whatever'
});

export default connected;
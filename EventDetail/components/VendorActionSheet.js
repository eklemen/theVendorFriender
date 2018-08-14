import React, {Component} from 'react';
import {Clipboard} from 'react-native';
import {Text, Card, CardItem, Body, Button, Toast} from 'native-base';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {layout} from '../../shared/styles';
import {addContact} from '../../services/UserService';
import {reportUser} from '../../services/EventsService';

class VendorActionSheet extends Component {
  _addToContacts = (uuid) => async () => {
    const {addContact, closeModal} = this.props;
    try {
      await addContact(uuid);
      Toast.show({
        text: 'Successfully added to contacts.',
        buttonText: 'x',
        type: 'success',
        duration: 2000
      });
      closeModal();
    } catch (err) {
      Toast.show({
        text: 'Something went wrong, try again later.',
        buttonText: 'x',
        type: 'danger',
        duration: 2500
      });
      closeModal();
    }
  };

  _copyIGUsername = async () => {
    const {selectedUser, closeModal} = this.props;
    await Clipboard.setString(`@${selectedUser.user.igUsername}`);
    Toast.show({
      text: 'Copied to clipboard.',
      buttonText: 'x',
      type: 'success',
      duration: 1500
    });
    closeModal();
  };

  _reportUser = async () => {
    const {reportUser, closeModal, event, selectedUser} = this.props;
    await reportUser(event.uuid, selectedUser.user.uuid);
    Toast.show({
      text: 'User has been reported.',
      buttonText: 'x',
      duration: 2500
    });
    closeModal();
  };

  render() {
    const {
      isVisible,
      closeModal,
      selectedUser,
      myContacts,
      selfId
    } = this.props;
    const alreadyContact = myContacts.some(c => (c.uuid === selectedUser.user.uuid));
    return (
      <Modal
        isVisible={isVisible}
        onBackdropPress={closeModal}
        style={[layout.Row]}>
        <Card style={{flex: 1, alignSelf: 'flex-end'}}>
          <CardItem>
            <Body style={[layout.Col]}>
            <Button
              block
              info
              disabled={selectedUser.user.uuid === selfId || alreadyContact}
              onPress={this._addToContacts(selectedUser)}
              style={{marginBottom: 10}}>
              {
                selectedUser.user.uuid === selfId || alreadyContact
                  ? <Text> Already a Contact</Text>
                  : <Text>Add to Contacts</Text>
              }
            </Button>
            <Button
              block
              info
              onPress={this._copyIGUsername}
              style={{marginBottom: 10}}>
              <Text>Copy Instagram Username</Text>
            </Button>
            <Button block danger onPress={this._reportUser} style={{marginBottom: 10}}>
              <Text>Report User</Text>
            </Button>
            <Button
              onPress={closeModal}
              block
              light
              style={{marginBottom: 10}}>
              <Text>Cancel</Text>
            </Button>
            </Body>
          </CardItem>
        </Card>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  myContacts: state.Queries.MyContacts.data,
  selfId: state.Queries.User.data.uuid
});

const actions = {
  addContact,
  reportUser
};

export default connect(
  mapStateToProps, actions
)(VendorActionSheet);
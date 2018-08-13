import React, {Component} from 'react';
import {Clipboard} from 'react-native';
import {Text, Card, CardItem, Body, Button, Toast} from 'native-base';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import {layout} from '../../shared/styles';
import {addContact} from '../../services/UserService';

class VendorActionSheet extends Component {
  _addToContacts = (uuid) => async () => {
    const {addContact, closeModal} = this.props;
    try {
      await addContact(uuid);
      Toast.show({
        text: 'Successfully added to contacts',
        buttonText: 'x',
        type: 'success',
        duration: 2000
      });
      closeModal();
    } catch (err) {
      Toast.show({
        text: 'Successfully added to contacts',
        buttonText: 'x',
        type: 'danger',
        duration: 2000
      })
    }
  };

  _copyIGUsername = () => {
    Clipboard.setString('hello world');
  };

  render() {
    const {isVisible,
      closeModal,
      selectedUserId,
      myContacts,
      selfId
    } = this.props;
    const alreadyContact = myContacts.some(c => (c.uuid === selectedUserId));
    console.log('myContacts------------\n\r', myContacts);
    console.log('selfId------------\n\r', selfId);
    console.log('selectedUserId------------\n\r', selectedUserId);
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
              disabled={selectedUserId === selfId || alreadyContact}
              onPress={this._addToContacts(selectedUserId)}
              style={{marginBottom: 10}}>
              {
                alreadyContact
                  ? <Text> Already a Contact</Text>
                  : <Text>Add to Contacts</Text>
              }
            </Button>
            <Button block info style={{marginBottom: 10}}>
              <Text>Copy Instagram Username</Text>
            </Button>
            <Button block danger style={{marginBottom: 10}}>
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
  addContact
};

export default connect(
  mapStateToProps, actions
)(VendorActionSheet);
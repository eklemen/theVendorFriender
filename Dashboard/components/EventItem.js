import React from 'react';
import {Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button} from 'native-base';

const EventItem = () => {
  return (
    <ListItem>
      <Body>
      <Text>Sankhadeep</Text>
      <Text note numberOfLines={1}>Its time to build a difference . .</Text>
      </Body>
      <Right>
        <Button transparent>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default EventItem;

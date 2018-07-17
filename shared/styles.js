import {Dimensions} from 'react-native';

export const layout = {
  centerPad: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center',
    alignItems: 'center'
  },
  marTop: {
    marginTop: 20
  },
  Row: {
    display: 'flex',
    flexDirection: 'row'
  },
  Col: {
    display: 'flex',
    flexDirection: 'column'
  },
  align: {
    start: {
      alignItems: 'flex-start'
    },
    center: {
      alignItems: 'center'
    },
    end: {
      alignItems: 'flex-end'
    },
    selfStart: {alignSelf: 'start'},
    selfEnd: {alignSelf: 'end'},
    selfCenter: {alignSelf: 'center'}
  },
  withPad: {
    width: Dimensions.get('window').width * 0.9,
    alignSelf: 'center'
  },
  fullWidth: {
    width: Dimensions.get('window').width
  },
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  flex3: {
    flex: 3
  },
  flex4: {
    flex: 4
  },
  flex5: {
    flex: 5
  },
  flex6: {
    flex: 6
  }
};
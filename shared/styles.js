import {StyleSheet, Dimensions} from 'react-native';

export const layout = {
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
    }
  },
  withPad: {
    width: Dimensions.get('window').width * 0.9
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
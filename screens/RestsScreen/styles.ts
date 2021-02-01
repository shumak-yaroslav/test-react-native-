import {StyleSheet} from 'react-native';
import {THEME} from '../../theme.js';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.MAIN_COLOR,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 50,
    marginTop: 50,
    fontSize: 16,
  },
  img: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
});

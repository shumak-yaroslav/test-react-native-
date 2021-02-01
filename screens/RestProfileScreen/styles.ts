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
  item: {
    marginBottom: 15,
    overflow: 'hidden',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
  },
  textWrap: {
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: 'red',
    fontFamily: 'open-regular',
  },
});

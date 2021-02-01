import {StyleSheet} from 'react-native';
import {THEME} from '../../theme.js';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.MAIN_COLOR,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 25,
    marginTop: 25,
    fontSize: 16,
  },
  timeText: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 25,
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

import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {THEME} from '../theme';

interface Props {
  item: {};
}

export const ApplicationProfile = (props: Props) => {
  const {item} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => console.log('clicked')}>
      <View style={styles.item}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>Question: {item.que}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.textWrap}>
          <Text style={styles.title}>Answers: {item.answers}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 350,
    marginBottom: 15,
    overflow: 'hidden',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: THEME.WHITE,
    borderRadius: 10,
    backgroundColor: THEME.MAIN_COLOR,
  },
  textWrap: {
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontFamily: 'open-regular',
    textAlign: 'center',
    padding: 10,
  },
  line: {
    width: 350,
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderColor: THEME.WHITE,
    backgroundColor: THEME.MAIN_COLOR,
  },
});

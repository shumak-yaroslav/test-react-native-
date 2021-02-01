import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {THEME} from '../theme';

interface Props {
  item: {};
  rests: [];
  answers: [];
  apps: {};
}

export const ApplicationProfileAnswers = (props: Props) => {
  const {item, rests, answers, apps} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => console.log('clicked')}>
      <View style={styles.item}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>Answer: {item.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 15,
    overflow: 'hidden',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: THEME.MAIN_COLOR,
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
  },
});

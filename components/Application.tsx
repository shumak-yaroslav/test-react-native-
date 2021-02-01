import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {THEME} from '../theme';
import moment from 'moment';

interface Props {
  item: {};
  onOpen: () => void;
  time: string;
}

export const Application = (props: Props) => {
  const {item, onOpen, time} = props;

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(item)}>
      <View style={styles.item}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>
            Date: {moment(time).format('MMMM Do YYYY, h:mm:ss a')}
          </Text>
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
});

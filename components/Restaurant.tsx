import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {THEME} from '../theme';

interface Props {
  item: {};
  onOpen: () => void;
  rests: [];
}

export const Restoraunt = (props: Props) => {
  const {item, onOpen, rests} = props;

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(item, rests)}>
      <View style={styles.item}>
        <View style={styles.textWrap}>
          <Text style={styles.title}>
            Name of restaurant: {item.restaurant.label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 300,
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
  },
});

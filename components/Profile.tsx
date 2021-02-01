import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {THEME} from '../theme';

interface Props {
  rests: [];
  label: string;
}

export const Profile = (props: Props) => {
  const {rests, label} = props;
  const rest = [];
  rests.map((el) => {
    if (el.restaurant.label === label) {
      rest.push(el);
    }
  });

  return (
    <View>
      {rest.map((el) => (
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.item}>
            <View style={styles.textWrap}>
              <Text style={styles.title}>
                {el.form_response.definition.title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
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
  },
  textWrap: {
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: THEME.MAIN_COLOR,
    fontFamily: 'open-regular',
    textAlign: 'center',
    padding: 20,
  },
});

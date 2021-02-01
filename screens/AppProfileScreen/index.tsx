import React, {useEffect} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {ApplicationProfile} from '../../components/ApplicationProfile';
import {CreateArray} from '../../components/CreateArray';
import moment from 'moment';

export const AppProfileScreen = ({route, navigation}) => {
  const {item, time} = route.params;
  const apps = item.form_response;
  const data = CreateArray(apps);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>List of questions and answers</Text>
      <Text style={styles.timeText}>
        Date: {moment(time).format('MMMM Do YYYY, h:mm:ss a')}
      </Text>
      <FlatList
        data={data}
        renderItem={({item}) => <ApplicationProfile item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

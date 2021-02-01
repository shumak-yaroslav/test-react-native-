import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './styles';
import {Application} from '../../components/Application';

export const RestProfileScreen = ({route, navigation}) => {
  const {item, label, rests} = route.params;
  const openApplicationHandler = (item) => {
    navigation.navigate('Profile', {
      item: item,
      time: item.form_response.landed_at,
    });
  };

  useEffect(() => {
    navigation.setOptions({title: `${label} profiles`});
  }, [label]);

  const rest = [];
  rests.map((el) => {
    if (el.restaurant.label === label) {
      rest.push(el);
    }
  });
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>
        List of profiles of this restaurant by date
      </Text>
      <FlatList
        data={rest}
        renderItem={({item}) => (
          <Application
            item={item}
            onOpen={openApplicationHandler}
            questions={item.form_response.definition.fields}
            time={item.form_response.landed_at}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

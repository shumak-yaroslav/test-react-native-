import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import styles from './styles';
import {Restoraunt} from '../../components/Restaurant';
import {useDispatch, useSelector} from 'react-redux';
import {loadRest} from '../../store/actions/rest';

export const RestsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const allRests = useSelector((state) => state.rest.allRests);

  const openRestaurantHandler = (item, rests) => {
    navigation.navigate('Profiles', {
      item: item,
      label: item.restaurant.label,
      rests: rests,
    });
  };

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/Anna-works/wANNA-job-mobile/master/dummyData/applications.json',
    )
      .then((response) => response.json())
      .then((json) => dispatch(loadRest(json)));
  }, [dispatch]);

  let newArr = allRests
    .sort(function (a, b) {
      return a.restaurant.label < b.restaurant.label ? -1 : 1;
    })
    .reduce(function (arr, el) {
      if (
        !arr.length ||
        arr[arr.length - 1].restaurant.label != el.restaurant.label
      ) {
        arr.push(el);
      }

      return arr;
    }, []);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.text}>List of the restaurants</Text>
      <FlatList
        data={newArr}
        renderItem={({item}) => (
          <Restoraunt
            item={item}
            onOpen={openRestaurantHandler}
            rests={allRests}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <Image
        source={require('../../assets/images/lets-go.png')}
        style={styles.img}
      />
    </View>
  );
};

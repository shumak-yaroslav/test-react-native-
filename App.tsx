import React from 'react';
import {StatusBar} from 'react-native';
import {RestsScreen} from './screens/RestsScreen';
import {RestProfileScreen} from './screens/RestProfileScreen';
import {AppProfileScreen} from './screens/AppProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './store/index';
import {THEME} from './theme';

const Stack = createStackNavigator();

const App: () => JSX.Element = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Restaurants"
              component={RestsScreen}
              options={{
                headerStyle: {
                  backgroundColor: THEME.MAIN_COLOR,
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="Profiles"
              component={RestProfileScreen}
              options={{
                headerStyle: {
                  backgroundColor: THEME.MAIN_COLOR,
                },
                headerTintColor: '#fff',
              }}
            />
            <Stack.Screen
              name="Profile"
              component={AppProfileScreen}
              options={{
                headerStyle: {
                  backgroundColor: THEME.MAIN_COLOR,
                },
                headerTintColor: '#fff',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

export default App;

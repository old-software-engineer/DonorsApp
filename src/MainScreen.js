import React from 'react';

import { StackNavigator } from 'react-navigation';
import MapScreen from './src/MapScreen';
// import LoginScreen from './src/LoginScreen';
import ProfileScreen from './src/ProfileScreen';
import MapScreen2 from './src/MapScreen2';
import AddContact from './src/AddContact';

const MainScreen = StackNavigator({
    // LoginScreen: { screen: LoginScreen},
    ProfileScreen: { screen: ProfileScreen},
    MapScreen: { screen: MapScreen},
    MapScreen2: { screen: MapScreen2},
    AddContact: { screen: AddContact}
})

export default MainScreen;

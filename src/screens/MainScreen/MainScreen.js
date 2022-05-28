import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import { flame, star } from "../../constants/icons"
import PicksTab from './PicksTab'
import FavouritesTab from './FavouritesTab'
import { colors } from "../../constants/theme"

const Tab = createMaterialTopTabNavigator();
const iconSize = 20

const MainScreen = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:colors.background, paddingBottom: 0}}>
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
          tabBarInactiveTintColor: colors.red,
          tabBarActiveTintColor: colors.black,
          tabBarLabelStyle: styles.tabText,
          tabBarItemStyle: {borderRadius: 28},
          tabBarStyle: styles.barStyle,
          tabBarShowLabel: false,
          tabBarIndicatorStyle: styles.tabBarIndicator
        }}
      >
        <Tab.Screen 
            name="Picks" 
            component={PicksTab} 
            options={{
                tabBarIcon: ({focused}) => (
                  <Image
                    source={flame}
                    resizeMode="contain"
                    style={[styles.tabIcon, {marginLeft: 2, tintColor: focused ? colors.red : colors.black}]}
                  />
                )
            }}
         />
        <Tab.Screen 
            name="Favourites" 
            component={FavouritesTab} 
            options={{
                tabBarIcon: ({focused}) => (
                  <Image
                    source={star}
                    resizeMode="contain"
                    style={[styles.tabIcon, {marginLeft: 3, tintColor: focused ? colors.red : colors.black}]}
                  />
                )
            }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabText: {
    fontSize: 12, 
    textTransform: "none", 
    margin: 0,
  },

  barStyle: {
    elevation: 0, 
    shadowColor: "#E3E3E4", 
    borderRadius: 28,
    backgroundColor: "#E3E3E4",
    width: 120,
    height: 45,
    alignSelf:"center",
    justifyContent: "center",
    marginTop: 15
  },
  tabIcon: {
    width: iconSize,
    height: iconSize,
    borderRadius: 28,
  },
  tabBarIndicator: {
    backgroundColor:"white", 
    borderRadius: 28, 
    height:35, 
    marginTop: 5, 
    marginBottom: 5, 
    width: 50, 
    marginRight: 5, 
    marginLeft: 5
  }
});

export default MainScreen;
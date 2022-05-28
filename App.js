// import 'react-native-gesture-handler';
import React from 'react'
import {View, Image, TouchableOpacity, Dimensions} from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import { paw, chat, profile } from "./src/constants/icons"
import { colors } from "./src/constants/theme"
import MainScreen from './src/screens/MainScreen/MainScreen'
import ChatScreen from './src/screens/ChatScreen/ChatScreen'
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen'


const Tab = createBottomTabNavigator();
const iconSize = 25

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={
        {
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: [
            {
              display:"flex",
              position: "absolute",
              borderTopWidth: 0,
              height: 60,
              marginBottom: Dimensions.get('window').height * (3/100),
              paddingHorizontal: 10,
              // justifyContent:"center",
              // alignItems:"center",
              borderTopWidth: 0,
              borderColor:"white",
              backgroundColor:"white",
              width: "52%",
              borderRadius: 36,
              shadowColor: "#BFBFC04D",
              shadowOffset: {width:0, height:10},
              shadowOpacity: 10,
              shadowRadius: 10,
              left: "24%",
            }
          ],
          tabBarItemStyle:{
            height:60,
          }
        }
      }
    >
      <Tab.Screen
        name="Inbox"
        component={MainScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={paw}
              resizeMode="contain"
              style={{
                width: iconSize,
                height: iconSize,
                tintColor: focused ? colors.red : colors.black,
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={chat}
              resizeMode="contain"
              style={{
                width: iconSize,
                height: iconSize,
                tintColor: focused ? colors.red : colors.black
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={profile}
              resizeMode="contain"
              style={{
                width: iconSize-1,
                height: iconSize-1,
                tintColor: focused ? colors.red : colors.black
              }}
            />
          )
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default App;
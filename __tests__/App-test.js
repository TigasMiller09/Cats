/**
 * @format
 */

import 'react-native';
import React from 'react';
import ProfileScreen from "../src/screens/ProfileScreen/ProfileScreen"
import ChatScreen from "../src/screens/ChatScreen/ChatScreen"
import FavouritesTab from "../src/screens/MainScreen/FavouritesTab"

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ProfileScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
  const tree = renderer.create(<ChatScreen/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly', () => {
  const tree = renderer.create(<FavouritesTab/>).toJSON();
  expect(tree).toMatchSnapshot();
});





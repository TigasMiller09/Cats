import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from "../../constants/theme"

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>02</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: "30%"
  },
  text: {
    fontSize: 126,
    fontWeight: "700",
    color: "#BFBFC0",
  }
});

export default ChatScreen;
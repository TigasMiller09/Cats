import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { colors } from "../../constants/theme"

const FavouritesTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>01</Text>
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

export default FavouritesTab;
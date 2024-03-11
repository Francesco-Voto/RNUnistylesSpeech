import {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CharactersError = () => (
  <View style={styles.root} testID="characters-error">
    <Text style={styles.title}>Something happened!</Text>
    <Text style={styles.subtitle}>Please retry or contact our support</Text>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
  },
});

export default memo(CharactersError);

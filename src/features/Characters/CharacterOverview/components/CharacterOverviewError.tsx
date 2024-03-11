import {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CharacterDetailsError = () => (
  <View style={styles.root} testID="character-details-error">
    <Text style={styles.title}>Something happened!</Text>
    <Text style={styles.subtitle}>Please retry or contact our support</Text>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'gray',
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'gray',
    fontSize: 16,
  },
});

export default memo(CharacterDetailsError);

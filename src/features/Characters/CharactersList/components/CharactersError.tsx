import {memo} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

const CharactersError = () => (
  <View style={styles.root} testID="characters-error">
    <Text style={styles.title}>Something happened!</Text>
    <Text style={styles.subtitle}>Please retry or contact our support</Text>
  </View>
);

const styles = StyleSheet.create(theme => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.secondary,
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: theme.colors.secondary,
    fontSize: 16,
  },
}));

export default memo(CharactersError);

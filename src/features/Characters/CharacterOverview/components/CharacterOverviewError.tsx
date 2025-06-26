import {memo} from 'react';
import {Text, View} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

const CharacterDetailsError = () => (
  <View style={styles.root} testID="character-details-error">
    <Text style={styles.title}>Something happened!</Text>
    <Text style={styles.subtitle}>Please retry or contact our support</Text>
  </View>
);

const styles = StyleSheet.create(theme => ({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: theme.colors.tertiary,
    marginBottom: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: theme.colors.tertiary,
    fontSize: 16,
  },
}));

export default memo(CharacterDetailsError);

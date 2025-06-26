import {ActivityIndicator, View} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

const CharactersLoading = () => (
  <View style={styles.root}>
    <ActivityIndicator testID="characters-loading" size="large" color="white" />
  </View>
);

const styles = StyleSheet.create(theme => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default CharactersLoading;

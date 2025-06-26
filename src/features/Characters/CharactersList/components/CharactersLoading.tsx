import {ActivityIndicator, View} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

const CharactersLoading = () => (
  <View style={styles.root}>
    <ActivityIndicator testID="characters-loading" size="large" color="white" />
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CharactersLoading;

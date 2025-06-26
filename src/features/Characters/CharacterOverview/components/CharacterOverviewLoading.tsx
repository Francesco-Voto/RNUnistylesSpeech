import {ActivityIndicator, View} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

const CharacterDetailsLoading = () => (
  <View style={styles.root}>
    <ActivityIndicator
      testID="character-details-loading"
      size="large"
      color="green"
    />
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CharacterDetailsLoading;

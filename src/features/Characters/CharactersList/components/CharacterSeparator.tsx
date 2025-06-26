import {View} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';

const CharacterSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 16,
  },
});

export default CharacterSeparator;

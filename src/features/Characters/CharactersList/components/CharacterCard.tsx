import {type FC, memo} from 'react';
import {type Character} from '@services/api';
import {Image, Pressable, Text, View} from 'react-native';
import {StyleSheet} from 'react-native-unistyles';
import {useNavigation} from '@react-navigation/native';
import {type CharactersListNavigationProp} from '../../navigation';

interface Props {
  character: Character;
}

const CharacterCard: FC<Props> = ({character}) => {
  const {navigate} = useNavigation<CharactersListNavigationProp>();

  const onPress = () => {
    navigate('CharacterDetails', {id: character.id});
  };

  return (
    <Pressable style={styles.cardRoot} onPress={onPress}>
      <Image style={styles.image} source={{uri: character.image}} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <View style={styles.secondaryInfoContainer}>
          <Text style={styles.secondaryInfo}>{character.species}</Text>
          <Text style={styles.secondaryInfo}>{character.status}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardRoot: {
    borderRadius: 8,
    overflow: 'hidden',
    height: 320,
    alignSelf: 'stretch',
  },
  image: {
    flex: 1,
  },
  textContainer: {
    padding: 8,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 24,
  },
  secondaryInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  secondaryInfo: {
    fontSize: 16,
  },
});

export default memo(CharacterCard);

import {type NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackParamList = {
  CharactersList: undefined;
  CharacterDetails: {id: number};
};

export type CharactersListNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'CharactersList'
>;

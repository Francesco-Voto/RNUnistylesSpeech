import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharacterDetails from './CharacterOverview';
import CharactersList from './CharactersList';
import type {StackParamList} from './navigation';

const {Group, Screen, Navigator} = createNativeStackNavigator<StackParamList>();

const screenOptions = {
  headerShown: false,
};

const screenModalOptions = {
  presentation: 'modal' as 'modal',
};

const CharactersStack = () => (
  <Navigator screenOptions={screenOptions}>
    <Group>
      <Screen name="CharactersList" component={CharactersList} />
    </Group>
    <Group screenOptions={screenModalOptions}>
      <Screen name="CharacterDetails" component={CharacterDetails} />
    </Group>
  </Navigator>
);

export default CharactersStack;

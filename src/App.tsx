import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableFreeze, enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import CharactersStack from './features/Characters';

enableFreeze(true);
enableScreens(true);

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <CharactersStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

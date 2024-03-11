import {type FC, Suspense, useCallback, useMemo} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  type EdgeInsets,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {type Character} from '@services/api';
import {useGetCharactersList} from './hooks';
import CharacterCard from './components/CharacterCard';
import CharacterSeparator from './components/CharacterSeparator';
import CharactersLoading from './components/CharactersLoading';
import ErrorBoundary from 'react-native-error-boundary';
import CharactersError from './components/CharactersError';

function keyExtractor(item: Character) {
  return `${item.id}`;
}

function renderItem({item}: {item: Character}) {
  return <CharacterCard character={item} />;
}

const CharactersListComponent: FC = () => {
  const {data, setSize} = useGetCharactersList();

  const edgeInsets = useSafeAreaInsets();

  const styles = useMemo(() => generateStyles(edgeInsets), [edgeInsets]);

  const onEndReached = useCallback(() => {
    setSize(size => size + 1);
  }, [setSize]);

  return (
    <FlatList<Character>
      testID="characters-list"
      data={data}
      style={styles.root}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={keyExtractor}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.2}
      renderItem={renderItem}
      ItemSeparatorComponent={CharacterSeparator}
    />
  );
};

const generateStyles = ({top, bottom}: EdgeInsets) =>
  StyleSheet.create({
    contentContainer: {
      paddingHorizontal: 8,
      paddingTop: top + 8,
      paddingBottom: bottom,
    },
    root: {
      backgroundColor: 'green',
    },
  });

const CharactersList = () => (
  <ErrorBoundary FallbackComponent={CharactersError}>
    <Suspense fallback={<CharactersLoading />}>
      <CharactersListComponent />
    </Suspense>
  </ErrorBoundary>
);

export default CharactersList;

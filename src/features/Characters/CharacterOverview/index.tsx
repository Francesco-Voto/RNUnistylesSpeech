import {useRoute, useNavigation} from '@react-navigation/native';
import {Suspense, useCallback, useMemo} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import {
  type EdgeInsets,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import CharacterOverviewError from './components/CharacterOverviewError';
import CharacterOverviewLoading from './components/CharacterOverviewLoading';
import Episode from './components/Episode';
import {useGetCharacter} from './hooks';

const CharacterOverviewComponent = () => {
  const edgeInsets = useSafeAreaInsets();
  const {params} = useRoute<any>();

  const {goBack} = useNavigation<any>();
  const styles = useMemo(() => generateStyles(edgeInsets), [edgeInsets]);

  const onPressGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const {data} = useGetCharacter(params.id);
  if (!data) {
    return null;
  }

  const {image, name, species, status, episode} = data;
  return (
    <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
      <Image style={styles.image} source={{uri: image}} />
      <Pressable
        style={styles.backButton}
        onPress={onPressGoBack}
        testID="back-button">
        <Text style={styles.backButtonText}>â†</Text>
      </Pressable>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.secondaryInfoContainer}>
          <Text style={styles.secondaryInfo}>{species}</Text>
          <Text style={styles.secondaryInfo}>{status}</Text>
        </View>
        <View style={styles.episodesContainer}>
          <Text style={styles.episodesTitle}>Episodes</Text>
          {episode.map(e => (
            <Episode episode={e} key={e} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const generateStyles = ({top}: EdgeInsets) =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    backButton: {
      position: 'absolute',
      left: 16,
      top: top + 16,
      backgroundColor: 'white',
      borderRadius: 24,
      height: 48,
      width: 48,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backButtonText: {
      fontWeight: '600',
      fontSize: 32,
      color: 'green',
    },
    image: {
      alignSelf: 'stretch',
      height: 320,
    },
    infoContainer: {
      padding: 16,
    },
    name: {
      fontSize: 32,
      color: 'grey',
    },
    secondaryInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 8,
    },
    secondaryInfo: {
      fontSize: 24,
      color: 'grey',
    },
    episodesContainer: {
      borderTopWidth: 1,
      borderTopColor: 'grey',
      marginVertical: 16,
    },
    episodesTitle: {
      fontSize: 16,
      color: 'grey',
      marginTop: 8,
      marginBottom: 16,
    },
  });

const CharacterOverview = () => (
  <ErrorBoundary FallbackComponent={CharacterOverviewError}>
    <Suspense fallback={<CharacterOverviewLoading />}>
      <CharacterOverviewComponent />
    </Suspense>
  </ErrorBoundary>
);

export default CharacterOverview;

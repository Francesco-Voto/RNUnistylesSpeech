import {type FC, Suspense, memo} from 'react';
import {Text, View} from 'react-native';
import ErrorBoundary from 'react-native-error-boundary';
import {StyleSheet} from 'react-native-unistyles';
import {useGetEpisode} from '../hooks';

interface Props {
  episode: string;
}
const EpisodeComponent: FC<Props> = ({episode}) => {
  const {data} = useGetEpisode(episode);
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{data?.name}</Text>
    </View>
  );
};

const EpisodeError = () => (
  <View style={styles.root}>
    <Text style={styles.text}>An error occurred</Text>
  </View>
);

const EpisodieLoading = () => (
  <View style={styles.root}>
    <Text style={styles.text}>Loading</Text>
  </View>
);

const Episode: FC<Props> = props => (
  <ErrorBoundary FallbackComponent={EpisodeError}>
    <Suspense fallback={<EpisodieLoading />}>
      <EpisodeComponent {...props} />
    </Suspense>
  </ErrorBoundary>
);

const styles = StyleSheet.create({
  root: {
    height: 48,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default memo(Episode);

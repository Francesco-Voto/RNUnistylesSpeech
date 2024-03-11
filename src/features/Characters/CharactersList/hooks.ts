import {getCharactersKey, getCharacters, type Character} from 'services/api';
import useSWRInfinite from 'swr/infinite';

export function useGetCharactersList() {
  const {data, size, setSize} = useSWRInfinite(
    getCharactersKey,
    getCharacters,
    {
      suspense: true,
      revalidateFirstPage: false,
    },
  );

  const characters = data?.reduce(
    (acc: Character[], current: {results: Character[]}) => {
      return [...acc, ...current.results];
    },
    [],
  );

  return {
    data: characters,
    size,
    setSize,
  };
}

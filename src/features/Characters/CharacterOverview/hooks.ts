import {
  type Character,
  getCharacter,
  getCharacterUrl,
  getEpisode,
} from 'services/api';
import useSWR from 'swr';

export function useGetCharacter(id?: number) {
  const {data} = useSWR<Character>(getCharacterUrl(id), getCharacter, {
    suspense: true,
  });

  return {
    data,
  };
}

export function useGetEpisode(url: string) {
  const {data} = useSWR(url, getEpisode, {
    suspense: true,
  });

  return {
    data,
  };
}

import type {Brand} from '@types/brand';
import {get} from './httpClient';

const CHARACTERS_API = '/character';

type Status = 'Alive' | 'Dead' | 'unknown';
type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';
type Origin = Brand<
  {
    name: string;
    url: string;
  },
  'Origin'
>;
type LastKnowLocation = Brand<
  {
    name: string;
    url: string;
  },
  'LastKnowLocation'
>;

export type Character = {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Origin;
  location: LastKnowLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type PaginationInfo = {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
};

type GetCharactersResponse = {
  info: PaginationInfo;
  results: Character[];
};

export async function getCharacters(url: string) {
  const {data} = await get<GetCharactersResponse>(url);
  return data;
}

export function getCharactersKey(
  pageIndex: number,
  previousPageData: GetCharactersResponse,
) {
  if (pageIndex === 0) {
    return `${CHARACTERS_API}?page=${pageIndex}`;
  }
  return previousPageData.info.next;
}

type GetCharacterResponse = Character;

export function getCharacterUrl(id?: number) {
  return id !== undefined || id !== null ? `${CHARACTERS_API}/${id}` : null;
}

export async function getCharacter(url: string) {
  const {data} = await get<GetCharacterResponse>(url);
  return data;
}

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export async function getEpisode(url: string) {
  const {data} = await get<Episode>(url);
  return data;
}

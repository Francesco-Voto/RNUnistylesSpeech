import {type Character} from '@services/api';
import {MMKV} from 'react-native-mmkv';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

type State = {
  favourites: number[];
  setFavourite: (character: Character) => void;
  removeFromFavourites: (character: Character) => void;
  isFavourite: (character: number) => boolean;
  removeAllFavourites: () => void;
};

const storage: MMKV = new MMKV();
export const createJSONStorageHelper = (jsonStorage: MMKV) =>
  createJSONStorage(() => ({
    getItem: key => jsonStorage.getString(key) || null,
    setItem: (key, value) => jsonStorage.set(key, value),
    removeItem: key => jsonStorage.delete(key),
  }));

const useCharactersStore = create<State>()(
  persist(
    (set, get) => ({
      favourites: [],
      setFavourite: character => {
        const favArray = get().favourites;
        favArray.push(character.id);
        set({favourites: favArray});
      },
      removeFromFavourites: character => {
        const favArray = get().favourites;
        set({favourites: favArray.filter(id => character.id !== id)});
      },
      isFavourite: character => {
        const favArray = get().favourites;
        return favArray.some(id => id === character);
      },
      removeAllFavourites: () => set({favourites: []}),
    }),
    {
      name: 'character-state',
      storage: createJSONStorageHelper(storage),
    },
  ),
);

export default useCharactersStore;

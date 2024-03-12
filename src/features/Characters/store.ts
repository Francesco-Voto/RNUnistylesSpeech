import {Character} from '@services/api';
import {create} from 'zustand';

type State = {
  favourites: number[];
  setFavourite: (character: Character) => void;
  removeFromFavourites: (character: Character) => void;
  isFavourite: (character: number) => boolean;
  removeAllFavourites: () => void;
};

const useCharactersStore = create<State>((set, get) => ({
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
}));

export default useCharactersStore;

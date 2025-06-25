export const initialStore = () => ({
  people: [],
  planets: [],
  vehicles: [],
  favorites: [],
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'SET_PEOPLE':
      return { ...store, people: action.payload };
    case 'SET_PLANETS':
      return { ...store, planets: action.payload };
    case 'SET_VEHICLES':
      return { ...store, vehicles: action.payload };
    case 'ADD_FAVORITE':
      const alreadyExists = store.favorites.some(fav => fav.uid === action.payload.uid);
      if (alreadyExists) return store;
      return { ...store, favorites: [...store.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return {
        ...store,
        favorites: store.favorites.filter(item => item !== action.payload)
      };
    default:
      throw new Error('Unknown action type');
  }
}

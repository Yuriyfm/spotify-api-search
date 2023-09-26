import { configureStore } from '@reduxjs/toolkit'
import authTokenReducer from '@/store/authToken.slice'
import modeReducer from '@/store/mode.slice'
import categoriesReducer from '@/store/categories.slice'
import genresReducer from '@/store/genres.slice'
import playlistsReducer from '@/store/playlists.slice'
export const store = configureStore({
  reducer: {
    authToken: authTokenReducer,
    mode: modeReducer,
    categories: categoriesReducer,
    genres: genresReducer,
    playlists: playlistsReducer,
}});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

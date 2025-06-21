import { configureStore } from '@reduxjs/toolkit'
import { postPreviewReducer } from './postPreviewSlice'
import { langReducer } from '../lang/langSlice'
import { useDispatch, useSelector } from 'react-redux'
import { postsReducer } from '../postsSlice'
import { authReducer } from '../auth/authSlice'
import { postReducer } from '../postSlice'

export const store = configureStore({
  reducer: {
    postPreview: postPreviewReducer,
    lang: langReducer,
    posts: postsReducer,
    post: postReducer,
    auth: authReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
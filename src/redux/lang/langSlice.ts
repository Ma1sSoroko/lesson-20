import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { LangSlice, LangType } from '../../types'


const initialState: LangSlice = {
    lang: 'en'
}

export const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        setLang: (state, action: PayloadAction<LangType>) => {
            state.lang = action.payload
        },
    }
})

export const { setLang } = langSlice.actions
export const langReducer = langSlice.reducer
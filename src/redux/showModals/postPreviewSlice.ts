import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Post, PostPreviewState } from '../../types'


const initialState: PostPreviewState = {
    isShowModal: false,
    data: null
}

export const postPreviewSlice = createSlice({
    name: 'postPreview',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Post>) => {
            state.data = action.payload
        },
        clearData: (state) => {
            state.data = null
        },
        showModal: (state) => {
            state.isShowModal = true
        },
        hideModal: (state) => {
            state.isShowModal = false
        }
    }
})

export const { setData, clearData, showModal, hideModal } = postPreviewSlice.actions
export const postPreviewReducer = postPreviewSlice.reducer

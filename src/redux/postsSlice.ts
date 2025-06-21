import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import type { Post, PostsStateType, PostsParamsType, PostsResponseType, OrderingType, MyPostsParams } from '../types'
import { requestMyPosts, requestPosts } from '../services/posts'

export const POSTS_LIMIT: number = 10

type RootState = {
    posts: PostsStateType
}

export const fetchPosts = createAsyncThunk<PostsResponseType, PostsParamsType, { state: RootState }>(
    'posts/fetchPosts',
    async (params: PostsParamsType = {}, { getState }) => {
        const { limit = POSTS_LIMIT, offset = 0, author__course_group = 17 } = params
        const ordering = getState().posts.ordering
        console.log(ordering);

        const data = await requestPosts({ ...params, limit, offset, author__course_group, ordering })
        return data as PostsResponseType
    }
)

export const fetchMyPosts = createAsyncThunk<PostsResponseType, PostsParamsType, { state: RootState }>(
    'my_posts/fetchMyPosts',
    async (params: PostsParamsType = {}) => {
        const { limit = POSTS_LIMIT, offset = 0 } = params

        const data = await requestMyPosts({ ...params, limit, offset })
        return data as PostsResponseType
    }
)

export const addFavoritePost = createAsyncThunk<Post, Post, { rejectValue: string }>(
    'posts/addFavoritePost', async (post) => {
        return post
    }
)

const initialState: PostsStateType = {
    list: null,
    error: null,
    isLoading: false,
    favoritePosts: [],
    myPosts: [],
    limit: POSTS_LIMIT,
    total: 0,
    ordering: 'date'
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setOrdering: (state, action: PayloadAction<OrderingType>) => {
            state.ordering = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.error.message || null
                state.isLoading = false
            })
            .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<PostsResponseType>) => {
                state.list = action.payload.results
                state.total = action.payload.count
                state.isLoading = false
            })
            .addCase(addFavoritePost.fulfilled, (state, action: PayloadAction<Post>) => {
                state.favoritePosts.push(action.payload)
                state.isLoading = false
            })
            .addCase(fetchMyPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchMyPosts.rejected, (state, action) => {
                state.error = action.error.message || null
                state.isLoading = false
            })
            .addCase(fetchMyPosts.fulfilled, (state, action: PayloadAction<PostsResponseType>) => {
                state.myPosts = action.payload.results
                state.total = action.payload.count
                state.isLoading = false
            })
    }
})

export const postsReducer = postsSlice.reducer
export const { setOrdering } = postsSlice.actions
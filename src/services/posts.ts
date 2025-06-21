import type { Post, PostsParamsType, PostsResponseType } from '../types'
import { baseUrl, postsEndpoint } from '../config/locales/api'
import { get, post } from '../config/locales/client'

export async function requestPosts(params?: PostsParamsType): Promise<PostsResponseType | void> {
    try {
        const response = await get(baseUrl + postsEndpoint, { params })

        return response.data
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error', error.message);
        }
    }
}

export async function requestPost(id: string | number): Promise<Post | void> {
    try {
        const response = await get(baseUrl + postsEndpoint + '/' + id)

        return response.data
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error', error.message);
        }
    }
}

export async function requestNewPost(formData: FormData) {
    try {
        const response = await post(baseUrl + postsEndpoint, formData)

        return response.data
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error', error.message);
        }
    }
}

export async function requestMyPosts(params?: PostsParamsType): Promise<PostsResponseType | void> {
    try {
        const response = await get(baseUrl + postsEndpoint + '/my_posts', { params })

        return response.data
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error', error.message);
        }
    }
}
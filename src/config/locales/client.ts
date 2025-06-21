import axios from 'axios'
import { authRefreshEndpoint, baseUrl } from './api'
import { jwt } from '../../utils/jwt'
import { store } from '../../redux/showModals/store'
import type { JwtType } from '../../types'
import { fetchRefresh } from '../../redux/auth/authSlice'

const client = axios.create({
    baseURL: baseUrl
})

client.interceptors.request.use(async function (config) {
    if (config.url?.includes(authRefreshEndpoint)) {
      return config
    }
  
    let token = store.getState().auth.jwt
  
    if (token) {
      if (jwt.isTokenExpired(token.access)) {
        await store.dispatch(fetchRefresh({ refresh: token.refresh }))
        token = store.getState().auth.jwt as JwtType
      }
  
      config.headers.Authorization = `Bearer ${token.access}`
    }
  
      return config
    }
  )

export const get = client.get
export const post = client.post
export const put = client.put
export const del = client.delete
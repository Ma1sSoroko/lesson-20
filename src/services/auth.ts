import type { UserType, SignUpBodyType, SignInBodyType, JwtType } from '../types'
import { baseUrl, authSignUpEndpoint, authActivationEndpoint, authSignInEndpoint, authRefreshEndpoint } from '../config/locales/api'
import { post } from '../config/locales/client'

const COURSE_GROUP = 17

export async function requestSignUp (body: SignUpBodyType): Promise<UserType | void> {
  const response = await post(baseUrl + authSignUpEndpoint, {
    ...body,
    course_group: COURSE_GROUP
  } as SignUpBodyType)

  return response.data
}

export async function requestActivation (body: { uid: string, token: string }) {
  const response = await post(baseUrl + authActivationEndpoint, body)

  return response.data
}

export async function requestSignIn (body: SignInBodyType): Promise<JwtType | void> {
  const response = await post(baseUrl + authSignInEndpoint, body)

  return response.data
}

export async function requestRefresh (body: Pick<JwtType, 'refresh'>): Promise<Pick<JwtType, 'access'> | void> {
  const response = await post(baseUrl + authRefreshEndpoint, body)

  return response.data
}
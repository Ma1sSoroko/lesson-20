export type LangType = 'en' | 'ru'

export type OrderingType = 'date' | 'title' | 'text'

export interface LangContextType {
  lang: LangType
  setLang: (lang: LangType) => void
}

export interface TitleContextType {
  title: string
  setTitle: (title: string) => void
}

export interface OrderingContextType {
  ordering: OrderingType
  setOrdering: (ordering: OrderingType) => void
}

export interface MyComponentProps {
  style: React.CSSProperties
}

export interface Post {
  id: number
  title?: string
  text?: string
  image?: string
  date?: string
  isFavorite?: boolean
}

export type PostPreviewState = {
  isShowModal: boolean
  data: Post | null
}

export type LangSlice = {
  lang: LangType
}

export type OrderingSlice = {
  ordering: OrderingType
}

export type PostsStateType = {
  list: Post[] | null,
  error: string | null,
  isLoading: boolean,
  favoritePosts: Post[],
  myPosts: Post[] | null,
  limit: number,
  total: number,
  ordering: string
}

export type PostsMyStateType = {
  list: Post[] | null,
  error: string | null,
  isLoading: boolean,
  limit: number,
  total: number
}

export type PostsParamsType = {
  author__course_group?: number
  limit?: number
  offset?: number
  ordering?: string
  search?: string
}

export type MyPostsParams = {
  limit?: number
  offset?: number
}

export type PostsResponseType = {
  count: number
  results: Post[]
}

export type SignUpBodyType = {
  username: string
  email: string
  password: string
  confirm_password: string
  course_group?: number
}

export type UserType = {
  id: number
  username: string
  email: string
  course_group: number
}

export type ActivationBodyType = {
  uid: string
  token: string
}

export type ActivationStateType = {
  isSignedUp: boolean,
  isLoading: boolean,
  error: string | null,
  isActivated: boolean,
  jwt: JwtType | null,
}

export type SignInBodyType = {
  email: string
  password: string
}

export type JwtType = {
  access: string
  refresh: string
}

export type PostStateType = {
  data: Post | null
  isLoading: boolean
  error: string | null
}
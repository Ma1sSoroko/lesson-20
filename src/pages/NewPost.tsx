import React from 'react'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router'
import { NewPostForm } from '../components/newPostForm/NewPostForm'
import { useAppSelector } from '../redux/showModals/store'
import { locales } from '../config/locales'
import type { TitleContextType } from '../types'

export function NewPost (): React.ReactElement {
    const lang = useAppSelector(state => state.lang.lang)
    const { setTitle } = useOutletContext<TitleContextType>()
  
    useEffect(() => { setTitle(locales[lang].header.newPost) }, [lang])

  return (
    <NewPostForm />
  )
}
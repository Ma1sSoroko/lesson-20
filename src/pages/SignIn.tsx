import { useEffect } from 'react'
import { useOutletContext } from 'react-router'
import { SignInInput } from '../components/signInInput/SignInInput'
import { locales } from '../config/locales'
import type { TitleContextType } from '../types'
import { useAppSelector } from '../redux/showModals/store'

export function SignIn(): React.ReactElement {
  const lang = useAppSelector(state => state.lang.lang)
  const { setTitle } = useOutletContext<TitleContextType>()

  useEffect(() => { setTitle(locales[lang].signIn.title) }, [lang])

  return <SignInInput />
}
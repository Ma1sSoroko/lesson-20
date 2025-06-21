import { useEffect } from 'react'
import { useOutletContext } from 'react-router'
import { SignUpInput } from '../components/signUpInput/SignUpInput'
import { locales } from '../config/locales'
import type { TitleContextType } from '../types'
import { useAppSelector } from '../redux/showModals/store'

export function SignUp(): React.ReactElement {
  const lang = useAppSelector(state => state.lang.lang)
  const { setTitle } = useOutletContext<TitleContextType>()

  useEffect(() => { setTitle(locales[lang].signUp.title) }, [lang])

  return <SignUpInput />
}
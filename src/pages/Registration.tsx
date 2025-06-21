import { useEffect } from 'react'
import { useOutletContext } from 'react-router'
import { WindowInfo } from '../components/windowInfo/WindowInfo'
import { locales } from '../config/locales'
import type { TitleContextType } from '../types'
import { useAppSelector } from '../redux/showModals/store'

export function Registration(): React.ReactElement {
  const lang = useAppSelector(state => state.lang.lang)
  const { setTitle } = useOutletContext<TitleContextType>()

  useEffect(() => { setTitle(locales[lang].registration.title) }, [lang])

  return (
    <WindowInfo>{locales[lang].registration.windowInfo}</WindowInfo>
  )
}
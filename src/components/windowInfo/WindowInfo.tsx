import { useContext } from 'react'
import style from './WindowInfo.module.scss'
import { Button } from '../button/Button'
import { locales } from '../../config/locales'
import { useAppSelector } from '../../redux/showModals/store'

export function WindowInfo(props: { children: React.ReactNode }): React.ReactElement {
    const lang = useAppSelector(state => state.lang.lang)

        return (
                <div className={style.wrap}>
                        <p>{props.children}</p>
                        <Button primary>{locales[lang].windowInfo.button}</Button>
                </div>
        )
}
import style from './Breadcrumbs.module.scss'

export function Breadcrumbs({ children }: { children: React.ReactNode }): React.ReactElement {
    return (
        <span className={style.bread}>
            {children}
        </span>
    )
}
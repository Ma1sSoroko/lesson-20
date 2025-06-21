import style from './Button.module.scss'

export function Button(props: { primary: boolean, children: React.ReactNode }): React.ReactElement {

  let classList = [style.btn]

  if (props.primary) {
    classList.push(style.primary)
  }

  return <button className={classList.join(' ')}>{props.children}</button>
}
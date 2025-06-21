import { useState, useContext, useRef, useEffect } from 'react'
import style from './SignInInput.module.scss'
import { Button } from '../button/Button'
import { locales } from '../../config/locales'
import { Input } from '../input/Input'
import { useAppSelector } from '../../redux/showModals/store'
import { fetchSignIn } from '../../redux/auth/authSlice'
import { useAppDispatch } from '../../redux/showModals/store'

export function SignInInput(): React.ReactElement {
  const dispatch = useAppDispatch()
  const lang = useAppSelector(state => state.lang.lang)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const emailInputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setTimeout(() => {
      emailInputRef.current?.focus()
    }, 10)
  }, [emailInputRef])

  const reset = (): void => {
    setEmail('')
    setPassword('')
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const { value } = event.target

    setEmail(value)
  }

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setPassword(value)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    const body = { email, password }
    dispatch(fetchSignIn(body))

    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={style.wrap}>
        <div>
          <div>{locales[lang].signIn.email}</div>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            placeholder={locales[lang].signIn.email}
            className={style.input}
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
        <div>
          <div>{locales[lang].signIn.password}</div>
          <Input
            type="password"
            id="password"
            placeholder={locales[lang].signIn.password}
            className={style.inputPassword}
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <span className={style.span}>{locales[lang].signIn.forgotPassword}</span>
        <Button primary>{locales[lang].signIn.button}</Button>
        <div className={style.singUp}>{locales[lang].signIn.dontHaveAccount}</div>
      </form>
    </>
  )
}
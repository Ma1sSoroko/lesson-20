import { useState, useContext, useRef, useEffect } from 'react'
import style from '../signUpInput/SignUpInput.module.scss'
import { Button } from '../button/Button'
import { Input } from '../input/Input'
import { locales } from '../../config/locales'
import { useAppSelector } from '../../redux/showModals/store'
import { fetchSignUp } from '../../redux/auth/authSlice'
import { useAppDispatch } from '../../redux/showModals/store'

export function SignUpInput(): React.ReactElement {
    const lang = useAppSelector(state => state.lang.lang)
    const dispatch = useAppDispatch()
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const nameInputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        setTimeout(() => {
            nameInputRef.current?.focus()
        }, 10)
    }, [nameInputRef])

    const reset = () => {
        setName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const { value } = event.target

        setName(value)
    }

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target

        setEmail(value)
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target

        setPassword(value)
    }

    const handleChangeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target

        setConfirmPassword(value)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        const body = {
            username: name,
            email,
            password,
            confirm_password: confirmPassword
        }
        await dispatch(fetchSignUp(body))

        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={style.wrap}>
                <div>
                    <div>{locales[lang].inputName.label}</div>
                    <input
                        ref={nameInputRef}
                        type="name"
                        id="name"
                        placeholder={locales[lang].inputName.placeholder}
                        className={style.input}
                        value={name}
                        onChange={handleChangeName}
                    />
                </div>
                <div>
                    <div>{locales[lang].inputEmail.label}</div>
                    <Input
                        type="email"
                        id="email"
                        placeholder={locales[lang].inputEmail.placeholder}
                        className={style.input}
                        value={email}
                        onChange={handleChangeEmail}
                    />
                </div>
                <div>
                    <div>{locales[lang].inputPassword.label}</div>
                    <Input
                        type="password"
                        id="password"
                        placeholder={locales[lang].inputPassword.placeholder}
                        className={style.input}
                        value={password}
                        onChange={handleChangePassword}
                    />
                </div>
                <div>
                    <div>{locales[lang].inputConfirmPassword.label}</div>
                    <Input
                        type="confirmPassword"
                        id="confirmPassword"
                        placeholder={locales[lang].inputConfirmPassword.placeholder}
                        className={style.inputPassword}
                        value={confirmPassword}
                        onChange={handleChangeConfirmPassword}
                    />
                </div>
                <Button primary>{locales[lang].signUp.button}</Button>
                <div className={style.singUp}>{locales[lang].signUp.alreadyHaveAccount}</div>
            </form>
        </>
    )
}
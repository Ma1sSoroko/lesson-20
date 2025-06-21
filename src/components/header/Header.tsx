import { NavLink, Link } from 'react-router'
import { SearchForm } from '../searchForm/SearchForm'
import { locales } from '../../config/locales'
import type { LangType } from '../../types'
import { useAppSelector, useAppDispatch } from '../../redux/showModals/store'
import { setLang } from '../../redux/lang/langSlice'
import { authExit } from '../../redux/auth/authSlice'

export function Header(): React.ReactElement {
  const lang = useAppSelector(state => state.lang.lang)
  const dispatch = useAppDispatch()

  function handleChangeLang(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setLang(event.target.value as LangType))
  }

  function buildClassName({ isActive }: { isActive: boolean }): string {
    return isActive ? 'nav-link active' : 'nav-link'
  }

  function handleClickExit(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    dispatch(authExit())
    location.reload()
  }

  return (
    <header className="mb-4">
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{locales[lang].header.brand}</Link>

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={buildClassName} to="/auth/sign-in">{locales[lang].header.signIn}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={buildClassName} to="/auth/sign-up">{locales[lang].header.signUp}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={buildClassName} to="/posts/new">{locales[lang].header.newPost}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={buildClassName} to="/posts/my_posts">{locales[lang].header.myPosts}</NavLink>
            </li>
            <li className="nav-item">
                <a role="button" href="#" className="nav-link" onClick={handleClickExit}>Exit</a>
              </li>
            <li className="nav-item mx-3 justify-content-end"><SearchForm /></li>
            <li className="nav-item">
              <select className="form-select" onChange={handleChangeLang} value={lang}>
                <option value="en">English</option>
                <option value="ru">Russian</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
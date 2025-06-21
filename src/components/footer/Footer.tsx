import { locales } from '../../config/locales'
import { useAppSelector } from '../../redux/showModals/store'

export function Footer({ container: Container }: { container: React.ComponentType<{ children: React.ReactNode }> }): React.ReactElement {
  const lang = useAppSelector(state => state.lang.lang)

  return (
    <Container>
      <footer>
        <div className="d-flex align-items-center justify-content-between py-4 border-top">
          <p>{locales[lang].footer.copyright}</p>
          <p>{locales[lang].footer.rights} <strong>{lang}</strong></p>
        </div>
      </footer>
    </Container>
  )
}
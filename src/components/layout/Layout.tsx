import { useState } from 'react'
import { Outlet } from 'react-router'
import { Header } from '../header/Header'
import { Title } from '../title/Title'
import { Main } from '../main/Main'
import { Container } from '../container/Container'
import { Footer } from '../footer/Footer'
import { Breadcrumbs } from '../breadcrumbs/Breadcrumbs'

export function Layout(): React.ReactElement {
  const [title, setTitle] = useState<string>('')

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <Main>
        <Container>
          {/* TODO: breadcrumbs */}
          <Breadcrumbs>Back to home</Breadcrumbs>
          {title && <Title>{title}</Title>}
          <Outlet context={{ setTitle }} />
        </Container>
      </Main>
      <Footer container={Container} />
    </div>
  )
}
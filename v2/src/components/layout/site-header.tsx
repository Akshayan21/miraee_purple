import { Container } from '@/components/layout/content-layout'

import { Navbar } from '@/components/layout/navbar'

export function SiteHeader() {
  return (
    <header className="site-head mr-light">
      <Container className="mr-container">
        <Navbar />
      </Container>
    </header>
  )
}

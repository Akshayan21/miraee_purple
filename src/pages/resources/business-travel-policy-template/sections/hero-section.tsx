import { Section, Container } from '@/components/layout/content-layout'
import { DocumentPreview } from '@/components/sections/product-preview'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { DialogLink } from '@/components/forms/form-dialogs-context'

export function HeroSection() {
  return (
    <Section className="mr-paper lf-hero lf-hero--frame" aria-labelledby="hero-h">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Container className="mr-container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <span aria-current="page">Business travel policy template</span>
            </li>
          </ol>
        </Container>
      </nav>
      <Container className="mr-container split">
        <div className="split__copy lf-hero__copy">
          <p className="mr-eyebrow">Free template</p>
          <h1 className="mr-h1" id="hero-h">
            Business travel policy template for companies of 300 to 1,500 people
          </h1>
          <p className="mr-lead">
            This business travel policy template is a complete policy you can edit and adopt:
            booking, flights, hotels, ground transport, meals, approvals, changes, expenses and
            reimbursement, with a one-page rollout checklist. Every section is previewed below.
            Download the editable Word file and the PDF to make it yours.
          </p>
          <div className="mr-btn-row">
            <Button asChild>
              <DialogLink to="#download" dialog="template">
                Download the template
              </DialogLink>
            </Button>{' '}
            <Button asChild variant="tertiary">
              <a href="#preview">Preview it below</a>
            </Button>
          </div>
          <p className="lf-meta">
            Word and PDF · 12 policy sections · One-page rollout checklist · Updated{' '}
            <time dateTime="2026-09-30">September 30, 2026</time>
          </p>
        </div>
        <figure className="lf-hero__visual lf-hero__visual--doc" style={{ margin: '0' }}>
          <DocumentPreview className="doc-cover">
            <div className="doc-cover__top">
              <img src="/img/miraee-logo-orange.svg" alt="" width="84" height="21" />
            </div>
            <div className="doc-cover__photo">
              <picture>
                <source srcSet="/img/px6775122-team-map-card.webp" type="image/webp" />
                <img
                  src="/img/px6775122-team-map-card.jpg"
                  width="1200"
                  height="800"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
            <p className="doc-cover__t">
              The Business Travel Policy Template for Growing Companies
            </p>
            <p className="doc-cover__s">Travel and expense policy · Rollout checklist</p>
          </DocumentPreview>
        </figure>
      </Container>
    </Section>
  )
}

import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'

const PageTemplate = ({ data }) => {
  const { title, slug, body } = data.contentfulPage
  const postNode = data.contentfulPage

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${title} - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO pagePath={slug} postNode={postNode} pageSEO />

        <Container>
          <PageTitle>{title}</PageTitle>
          <PageBody body={body} />
        </Container>
      </div>
    </Layout>
  )
}

export default PageTemplate


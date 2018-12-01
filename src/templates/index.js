import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import config from '../utils/siteConfig'
import WebsiteList from '../components/WebsiteList';
import Website from '../components/Website';
import SEO from '../components/SEO'
import Container from '../components/Container'
import Menu from '../components/Menu'
import Helmet from 'react-helmet'

const Index = ({ data, pageContext }) => {
  const websites = data.allContentfulWebsite.edges;
  const featuredWebsite = websites[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

  console.log('websites', websites); // eslint-disable-line

  return (
    <Layout>
      <div>
        <SEO />
        {!isFirstPage && (
          <Helmet>
            <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
          </Helmet>
        )}
        <Menu/>
        <Container>
          {isFirstPage ? (
            <WebsiteList>
              <Website {...featuredWebsite} featured />
              {websites.slice(1).map(({ node: website }) => (
                <Website key={website.id} {...website} />
              ))}
            </WebsiteList>
          ) : (
            <WebsiteList>
              {websites.map(({ node: website }) => (
                <Website key={website.id} {...website} />
              ))}
            </WebsiteList>
          )}
        </Container>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulWebsite(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          id,
          title,
          description {
            content {
              nodeType,
              content {
                value
                nodeType
              }
            }
          },
          heroImage {
            id,
            fluid {
              src
            }
          },
          url
        }
      }
    }
  }
`
export default Index


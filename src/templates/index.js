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
  allContentfulWebsite(sort: {fields: [publishDate], order: DESC}) {
    edges {
      node {
        id
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        publishDateISO: publishDate(formatString: "YYYY-MM-DD")
        title
        description {
          content {
            nodeType
            content {
              value
              nodeType
            }
          }
        }
        heroImage {
          title
          fluid(maxWidth: 960) {
            src
          },
          ogimg: resize(width: 960) {
            src
            width
            height
          }
        }
        url
      }
    }
  }
}


`
export default Index


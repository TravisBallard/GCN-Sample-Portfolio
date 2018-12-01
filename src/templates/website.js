import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PostLinks from '../components/PostLinks'
import PostDate from '../components/PostDate'
import SEO from '../components/SEO'

const WebsiteTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    publishDate,
    description,
  } = data.contentfulWebsite
  const postNode = data.contentfulWebsite

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <div>
        <Helmet>
          <title>{`${title} - ${config.siteTitle}`}</title>
        </Helmet>

        <Hero title={title} image={heroImage} height={'50vh'} />

        <Container>
          <PostDate date={publishDate} />
          <div>
            {description.content[0].content[0].value}
          </div>
        </Container>
        <PostLinks previous={previous} next={next} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulWebsite(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
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
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
    }
  }
`

export default WebsiteTemplate
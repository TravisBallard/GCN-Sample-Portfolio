import React from "react"
import styled from "styled-components"

const Post = styled.li`
  flex: 1;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.base};
  margin: 0 0 1em 0;
  transition: background 0.2s;
  list-style: none;
  overflow: hidden;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
  img {
    max-width: 100%;
    width: 100%;
  }
  .contentWrapper {
    padding: 10px;
  }
  .websiteTitle {
    margin-top: 0;
  }
`

const Website = ({id, title, url, heroImage, description, ...props}) => {
  const websiteDescription = description.content[0].content[0].value;
  return (
    <Post featured={props.featured}>
      <div className="imageWrapper">
        {heroImage ? (
          <img src={heroImage.fluid.src} alt='' />
        ) : false}
      </div>
      <div className="contentWrapper">
        <h2 className="websiteTitle">{title}</h2>
        <div className="websiteDescription">{websiteDescription}</div>
      </div>
    </Post>
  )
}

export default Website
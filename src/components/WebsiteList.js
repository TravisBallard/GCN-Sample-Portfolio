import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
  overflow: hidden;
`

const WebsiteList = props => {
  return <List>{props.children}</List>
}

export default WebsiteList
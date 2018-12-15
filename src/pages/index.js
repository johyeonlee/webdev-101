import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const GlobalWrap = styled.div`
  display: flex
  flex-direction: column
  align-items: center
  padding: 2rem

  p {
    margin: 0;
  }
`

const Header = styled.div`
  text-align: left;
`

export const DescriptionWrapper = styled.div``

const IndexPage = () => (
  <Layout>
    <GlobalWrap>
      <SEO title="Home" keywords={['webdev', 'new', 'getting started']} />
      <Header>
        <h1>Web Dev 101</h1>
        <p>Creating a modern website in 2018</p>
        <p>Prerequisites, tools, and languages used</p>
      </Header>
      <div>
        <p />
      </div>
    </GlobalWrap>
  </Layout>
)

export default IndexPage

import React, { Component } from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Navbar from '../components/navbar'
import Languages from '../components/languages'

import landing from '../images/landing.png'

const GlobalWrap = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  @import url('https://fonts.googleapis.com/css?family=Scope+One');

  display: flex
  flex-direction: column
  align-items: center

  h1, h2, h3, h4 {
    font-family: Scope One;
  }

  p {
    font-family: Roboto;
    margin: 0;
  }

  .emphasize {
    font-weight: 700;
  }

  #language-selection {
    display: flex;
    justify-content: center;
  }
  #language-selection > button {
    margin: 0 1rem;
  }
`

const Header = styled.div`
  text-align: center;
  margin-top: 6rem;
`

export const DescriptionWrapper = styled.div`
  padding: 2rem 2rem;
  margin: 2rem;
  text-align: left;
  width: 100%;
`
const HeaderWrapper = styled.div`
  background-color: #333333;
  // padding: 0 2rem 2rem 2rem;
  color: white;
  position: relative;

  width: 100%;
  min-height: 75vh;

  #img-landing-graphic {
    width: 100%;
    margin-top: 2rem;
  }
`

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout>
        <GlobalWrap>
          <SEO title="Home" keywords={['webdev', 'new', 'getting started']} />

          <HeaderWrapper>
            <Navbar />
            <Header>
              <h1>WEB DEV 101</h1>
              <p>Creating a website in 2019?</p>
              <p>Have no idea where to start?</p>
            </Header>
            <img src={landing} alt="landing graphic" id="img-landing-graphic" />
          </HeaderWrapper>

          {/* LANGUAGES */}
          <DescriptionWrapper className="bg-light" id="_languages">
            <Languages />
          </DescriptionWrapper>

          {/* PREREQUISITES */}
          <DescriptionWrapper className="bg-light" id="_prerequisites">
            <u>
              <h4>Prerequisites:</h4>
            </u>
            <p>Computer!</p>
            <p>Programming: Very basics of HTML, CSS, JavaScript</p>
            <p>
              Editor: Your favourite code editor! Our faves include: VSCode,
              Atom, Bracket, Sublime Text
            </p>
            <br />
          </DescriptionWrapper>

          <DescriptionWrapper className="bg-light" id="_tools">
            <u>
              <h4>Tools:</h4>
            </u>
            <p>description here</p>
          </DescriptionWrapper>

          <DescriptionWrapper className="bg-light" id="_resources" />
        </GlobalWrap>
      </Layout>
    )
  }
}

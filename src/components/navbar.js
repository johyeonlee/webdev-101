import React from 'react'
import styled from 'styled-components'

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  z-index: 1;

  padding: 1rem;

  width: 100vw;

  background-color: #333333;

  .nav-item {
    margin: 1rem;
  }
`

const Navbar = () => (
  <NavbarWrapper>
    <p className="nav-item">Home</p>
    <p className="nav-item">Research</p>
    <p className="nav-item">Planning</p>
    <p className="nav-item">Tools</p>
    <p className="nav-item">Languages</p>
  </NavbarWrapper>
)

export default Navbar

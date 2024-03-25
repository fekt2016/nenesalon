/* eslint react/prop-types: 0 */

import styled, { css } from 'styled-components'
import NavItem from './NavItem'
import NavList from './NavList'
import Button from './Button'

const StyledNav = styled.nav`
  flex: 2;
  display: flex;
  align-items: center;
  ${(props) =>
    props.show &&
    css`
      align-items: flex-start;
      flex-direction: column;
    `}
`

function Navbar({ show }) {
  return (
    <StyledNav show={show}>
      <NavItem show={show}>
        <NavList text={'home'} mycolor="green" />
        <NavList text={'bridal'} />
        <NavList text={'about'} />
        <NavList text={'contact Us'} />
      </NavItem>
      <Button>Book Now</Button>
    </StyledNav>
  )
}

export default Navbar

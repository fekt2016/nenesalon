import styled from 'styled-components'
import NavItem from './NavItem'
import NavList from './NavList'

const StyledNav = styled.nav`
  flex: 2;
`

function Navbar() {
  return (
    <StyledNav>
      <NavItem>
        <NavList text={'home'} mycolor="green" />
        <NavList text={'bridal'} />
        <NavList text={'about'} />
        <NavList text={'contact Us'} />
      </NavItem>
    </StyledNav>
  )
}

export default Navbar

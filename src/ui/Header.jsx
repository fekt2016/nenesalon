import styled from 'styled-components'
import Navbar from './Navbar'
import Button from './Button'
import Welcome from '../features/HomePage/Welcome'

const StyledHeader = styled.header``
const StyledNav = styled.div`
  display: flex;
  padding: 1rem 4rem;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white-100);
  border-bottom: 1px solid var(--color-grey-300);
  box-shadow: var(--shadow-md);
`
const Logo = styled.span`
  flex: 1;
  text-transform: uppercase;
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  font-style: normal;
`
function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <Logo>Nene beauty salon</Logo>
        <Navbar />
        <Button>Book Now</Button>
      </StyledNav>
      <Welcome />
    </StyledHeader>
  )
}

export default Header

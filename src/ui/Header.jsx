import styled, { css } from 'styled-components'
import Navbar from './Navbar'
// import Button from './Button'
import Welcome from '../features/HomePage/Welcome'
import { useEffect, useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const StyledHeader = styled.header``
const StyledNav = styled.div`
  display: flex;
  padding: 1rem 4rem;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white-100);
  border-bottom: 1px solid var(--color-grey-300);
  box-shadow: var(--shadow-md);

  ${(props) =>
    props.show &&
    css`
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    `}
`
const Logo = styled.span`
  flex: 1;
  text-transform: uppercase;
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  font-style: normal;
`
const LogoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.show &&
    css`
      width: 100%;
    `}
`

const Icon = css`
  font-size: 2.5rem;
  fill: var(--color-primary-900);
`

const HamburgerIcon = styled(AiOutlineMenu)`
  ${Icon}
`
const CloseIcon = styled(AiOutlineClose)`
  ${Icon}
`
function Header() {
  const [showElement, setShowElement] = useState({
    navbarNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  })

  useEffect(() => {
    window.onresize = () => {
      let windowWidth = window.innerWidth

      windowWidth > 850 &&
        setShowElement({ navbarNav: true, hamburgerIcon: false })
      windowWidth < 885 &&
        setShowElement({ navbarNav: false, hamburgerIcon: true })
    }
  }, [])

  const openNav = () => {
    setShowElement({
      navbarNav: true,
      hamburgerIcon: false,
      closeIcon: true,
      navOpened: true,
    })
  }
  const closeNav = () => {
    setShowElement({
      navbarNav: false,
      hamburgerIcon: true,
      closeIcon: false,
      navOpened: false,
    })
  }

  return (
    <StyledHeader>
      <StyledNav show={showElement.navOpened}>
        <LogoBox show={showElement.hamburgerIcon || showElement.closeIcon}>
          <Logo>Nene beauty salon</Logo>
          {showElement.hamburgerIcon && <HamburgerIcon onClick={openNav} />}
          {showElement.closeIcon && <CloseIcon onClick={closeNav} />}
        </LogoBox>
        {showElement.navbarNav ? <Navbar show={showElement.navOpened} /> : null}
      </StyledNav>
      <Welcome />
    </StyledHeader>
  )
}

export default Header

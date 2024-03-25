/* eslint react/prop-types: 0 */

import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const StyledLink = styled(NavLink)`
  text-transform: capitalize;
  padding: 0.15rem 0.35rem;
  font-size: 1.8rem;
  border: 1px solid transparent;
  color: ${(props) => props.mycolor};
  ${(props) =>
    props.active === 'active' &&
    css`
      background-color: black;
      color: var(--color-white-100);
      transition: all 0.2s ease;
    `}
  &:hover {
  }
`

function NavList({ text, active = '', mycolor, to }) {
  return (
    <li>
      <StyledLink active={active} to={to} mycolor={mycolor}>
        {text}
      </StyledLink>
    </li>
  )
}

export default NavList

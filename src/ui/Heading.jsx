import styled, { css } from 'styled-components'

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 7rem;
      text-transform: uppercase;
      color: var(--color-textiary-900);
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      color: var(--color-black-900);
      font-size: 6rem;
      text-transform: capitalize;
    `}
    ${(props) =>
      props.as === 'h3' &&
      css`
        color: var(--color-textiary-900);
        font-size: 3rem;
        text-transform: capitalize;
      `}
      ${(props) =>
        props.as === 'h4' &&
        css`
          color: var(--color-textiary-900);
          font-size: 3rem;
          text-transform: capitalize;
        `}
`

export default Heading

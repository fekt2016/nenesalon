import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/breakpoint'

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 7rem;
      text-transform: uppercase;
      color: var(--color-textiary-900);

      @media ${devicesMax.md} {
        font-size: 5rem;
      }
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      color: var(--color-black-900);
      font-size: 6rem;
      text-transform: capitalize;

      @media ${devicesMax.sm} {
        font-size: 4rem;
      }
    `}
    ${(props) =>
      props.as === 'h3' &&
      css`
        color: ${(props) => props.color};
        font-size: 3rem;
        text-transform: capitalize;

        @media ${devicesMax.sm} {
          font-size: 2.5rem;
          text-align: center;
        }
      `}
      ${(props) =>
        props.as === 'h4' &&
        css`
          color: ${(props) => props.color};
          font-size: 3rem;
          text-transform: capitalize;
          @media ${devicesMax.sm} {
            font-size: 2rem;
            text-align: center;
          }
        `}
${(props) =>
  props.as === 'h5' &&
  css`
    color: ${(props) => props.color};
    font-size: 2rem;
    font-weight: bold;
  `}
`

export default Heading

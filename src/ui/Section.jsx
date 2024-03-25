import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/breakpoint'

const Section = styled.section`
  ${(props) =>
    props.type === 'wel' &&
    css`
      display: flex;
      margin-bottom: 8rem;

      @media ${devicesMax.md} {
        flex-direction: column;
      }
    `}
  ${(props) =>
    props.type === 'exp' &&
    css`
      background-color: var(--color-black-900);
      color: var(--color-white-100);
      display: flex;
      flex-direction: column;
      padding: 8rem;
      @media ${devicesMax.sm} {
        padding: 3rem;
      }
    `}
`

export default Section

import styled, { css } from 'styled-components'

const Section = styled.section`
  ${(props) =>
    props.type === 'wel' &&
    css`
      display: flex;
      margin-bottom: 8rem;
    `}
  ${(props) =>
    props.type === 'exp' &&
    css`
      background-color: var(--color-black-900);
      color: var(--color-white-100);
      display: flex;
      flex-direction: column;
      padding: 8rem;
    `}
`

export default Section

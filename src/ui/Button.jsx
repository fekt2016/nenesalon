import styled, { css } from 'styled-components'

const sizes = {
  small: css``,
  medium: css`
    font-size: 2rem;
  `,
  large: css`
    font-size: 3rem;
  `,
}
const variation = {
  primary: css`
    padding: 1rem 2rem;
    border: none;
    background-color: var(--color-primary-900);
    color: var(--color-textiary-900);

    &:hover {
      transform: scale(1.2);
    }
  `,
  secoundary: css`
    background-color: var(--color-textiary-900);
    color: var(--color-primary-900);
  `,
  textiary: css``,
}

const Button = styled.button`
  border-radius: 7px;
  text-transform: capitalize;

  box-shadow: var(--shadow-sm);
  transition: all 0.4s;

  ${(props) => sizes[props.size]}
  ${(props) => variation[props.variation]}
`
Button.defaultProps = {
  variation: 'primary',
  size: 'medium',
}
export default Button

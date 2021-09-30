import styled from 'styled-components'

export const Button = styled.div`
  padding: 10px 38px;
  border-radius: 50px;
  font-size: 0.875rem;
  transition: var(--transition-in);
  text-align: center;

  @media (min-width: 992px) {
    padding: 17px 38px;
  }

  &:hover,
  &:focus {
    transition: var(--transition-out);
    transform: scale(0.96);
  }

  &.layout {
    &--primary {
      background-color: var(--color-theme);
      color: var(--color-content);

      &:hover,
      &:focus {
        background-color: var(--color-theme-light);
      }
    }

    &--outline-white {
      border: 1px solid rgba(255, 255, 255, 0.5);

      &:hover,
      &:focus {
        background-color: var(--color-white);
        color: var(--bg-color);
      }
    }
  }
`

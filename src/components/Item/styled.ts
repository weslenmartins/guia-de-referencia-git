import styled from 'styled-components'

export const Item = styled.article`
  flex: 1 1 100%;

  border-top: 1px solid var(--border-color);
  line-height: 1;

  a {
    display: block;
    padding-top: 15px;
    padding-bottom: 25px;
    transition: var(--transition-in);

    > b {
      display: none;
    }

    @media (min-width: 992px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 27px;
      padding-bottom: 45px;

      > b {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border: 1px solid var(--border-color);
        border-radius: 100%;
        transform: translateY(-5px);
        transition: var(--transition-in);

        > svg {
          max-width: 90%;
        }
      }
    }
  }

  &:hover {
    border-top: 1px solid var(--color-theme);
    transition: var(--transition-out);

    a {
      transition: var(--transition-out);

      @media (min-width: 992px) {
        > b {
          background: var(--color-theme);
          color: var(--color-content);
        }
      }
    }
  }

  @media (min-width: 992px) {
    flex: 1 1 calc(33% - 30px);
    max-width: calc(33% - 30px);
    font-size: 1.563rem;
  }
`

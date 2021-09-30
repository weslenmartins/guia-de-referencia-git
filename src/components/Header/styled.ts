import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;

  a {
    color: var(--color-white);

    &:hover,
    &:focus {
      color: var(--color-theme);
    }
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: var(--color-white);

  > span {
    display: block;
    width: 47px;
    height: 47px;
    margin-right: 10px;
  }

  > b {
    display: none;
    font-weight: var(--font-weight-semi-bold);

    @media (min-width: 768px) {
      display: block;
    }
  }
`

export const Nav = styled.div``

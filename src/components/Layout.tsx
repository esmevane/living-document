import styled from 'styled-components'

export const Layout = styled.main`
  height: 100vh;
  overflow: hidden;
  width: 100vw;

  display: grid;
  grid-template: 'sidebar primary' / 1fr 3fr;

  a {
    color: ${props => props.theme.colors.accent.six};
    text-decoration: none;
    transition: 0.3s ease-in-out;

    :hover {
      color: ${props => props.theme.colors.accent.five};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ul {
    margin: 0;
    margin-top: ${props => props.theme.margin.six};
    padding: 0;
    padding-left: ${props => props.theme.padding.eight};
  }
`

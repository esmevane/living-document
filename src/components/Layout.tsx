import styled from 'styled-components'

export const Layout = styled.main`
  height: 100vh;
  overflow: hidden;
  width: 100vw;

  display: grid;
  grid-template: 'sidebar main' / 1fr 3fr;

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
  h6,
  p,
  blockquote {
    margin: 0;
    font-weight: ${props => props.theme.font.weight.five};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.primary.eight};
    font-family: ${props => props.theme.font.serif};
    line-height: ${props => props.theme.font.lineHeight.five};
    margin-top: ${props => props.theme.margin.eight};
    border-bottom: ${props => props.theme.border.width.two} solid
      ${props => props.theme.colors.primary.eight};
  }

  blockquote {
    border-left: ${props => props.theme.border.width.three} solid
      ${props => props.theme.colors.accent.five};
    color: ${props => props.theme.colors.accent.eleven};
    font-family: ${props => props.theme.font.serif};
    line-height: ${props => props.theme.font.lineHeight.five};
    margin-top: ${props => props.theme.margin.eight};
    padding: 0 ${props => props.theme.padding.eight};
  }

  p {
    line-height: ${props => props.theme.font.lineHeight.five};
    margin-top: ${props => props.theme.margin.eight};
    padding: 0 ${props => props.theme.padding.eight};
  }

  ul {
    line-height: ${props => props.theme.font.lineHeight.five};
    margin: 0;
    margin-top: ${props => props.theme.margin.six};
    padding: 0;
    padding-left: ${props => props.theme.padding.eight};
  }

  table {
    thead {
      border-bottom: ${props => props.theme.border.width.one} solid
        ${props => props.theme.colors.accent.eight};

      th:nth-child(1) {
        width: ${props => props.theme.width.four};
      }

      th:nth-child(2) {
        width: ${props => props.theme.width.five};
      }

      th:nth-child(3) {
        width: ${props => props.theme.width.five};
      }
    }

    table-layout: fixed;
    border-collapse: collapse;
    margin-top: ${props => props.theme.margin.six};
    width: ${props => props.theme.width.twelve};
  }
`

import styled from 'styled-components'

export const Main = styled.section`
  grid-area: main;

  background: ${props => props.theme.colors.neutral.two};
  color: ${props => props.theme.colors.neutral.eleven};
  padding: ${props => props.theme.padding.twelve};
  padding-top: ${props => props.theme.padding.eleven};
  overflow: auto;

  h1 {
    font-size: ${props => props.theme.font.size.seven};
  }

  strong {
    font-weight: ${props => props.theme.font.weight.six};
  }

  ul {
    margin-left: ${props => props.theme.margin.eight};
  }
`

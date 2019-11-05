import styled from 'styled-components'

export const Primary = styled.section`
  grid-area: primary;

  background: ${props => props.theme.colors.neutral.two};
  color: ${props => props.theme.colors.neutral.eleven};
  padding: ${props => props.theme.padding.twelve};
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

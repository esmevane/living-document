import styled from 'styled-components'

export const Primary = styled.section`
  grid-area: primary;

  background: ${props => props.theme.colors.neutral.two};
  color: ${props => props.theme.colors.neutral.eleven};
  padding: ${props => props.theme.padding.eleven};
  overflow: auto;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${props => props.theme.colors.primary.eight};
  }

  h1 {
    font-size: ${props => props.theme.font.size.seven};
  }
`

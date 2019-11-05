import styled from 'styled-components'

export const ErrorPage = styled.section`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  }

  h1 {
    border-bottom-color: ${props => props.theme.colors.destructive.two};
    color: ${props => props.theme.colors.destructive.four};
    font-weight: ${props => props.theme.font.weight.seven};
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    border-bottom: none;
    color: ${props => props.theme.colors.destructive.eleven};
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
`

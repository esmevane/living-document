import styled from 'styled-components'

export const Loading = styled.section`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border-bottom: none;
    color: ${props => props.theme.colors.neutral.six};
    font-weight: ${props => props.theme.font.weight.seven};
    text-align: center;
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
`

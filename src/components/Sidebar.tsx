import styled from 'styled-components'

export const Sidebar = styled.aside`
  grid-area: sidebar;

  background: ${props => props.theme.colors.neutral.eleven};
  color: ${props => props.theme.colors.neutral.two};
`

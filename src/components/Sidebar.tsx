import styled from 'styled-components'

export const Sidebar = styled.aside`
  grid-area: sidebar;

  background: ${props => props.theme.colors.neutral.ten};
  color: ${props => props.theme.colors.neutral.two};

  padding-top: ${props => props.theme.padding.eleven};
  padding-bottom: ${props => props.theme.padding.eleven};
  padding-left: ${props => props.theme.padding.nine};
  padding-right: ${props => props.theme.padding.nine};

  overflow: auto;

  a {
    color: ${props => props.theme.colors.neutral.six};
    text-decoration: none;
    transition: 0.3s ease-in-out;

    :hover {
      color: ${props => props.theme.colors.neutral.five};
    }
  }

  h1 {
    color: ${props => props.theme.colors.primary.six};
    font-size: ${props => props.theme.font.size.six};
  }

  ul {
    list-style-type: none;
  }

  li {
    line-height: ${props => props.theme.font.lineHeight.eight};
  }
`

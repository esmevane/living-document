import React from 'react'
import styled, { StyledProps } from 'styled-components'

interface ContainerProps {
  visible: boolean
}

const Container = styled.div`
  opacity: ${(props: StyledProps<ContainerProps>) =>
    props.visible ? props.theme.opacity.twelve : props.theme.opacity.one};
  transition: opacity 0.5s ease-in-out;
  transition-delay: 0.2s;
`

export const FadesIn: React.FC = ({ children }) => {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 300)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return <Container visible={visible}>{children}</Container>
}

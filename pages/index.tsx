import React from 'react'
import Box from '@src/components/Box'
import theme from '@src/theme/theme'
import styled from 'styled-components'

const Componente = styled.div`
  color: purple;
`

export default function HomeScreen() {
  return (
    <Box
      tag="main"
      stylesheet={{
        fontFamily: theme.typography.fontFamily,
        backgroundColor: {
          xs: 'red',
          sm: 'yellow',
          md: 'blue'
        }
      }}
    >
      <Componente>
        Olá
      </Componente>
    </Box>
  )
}

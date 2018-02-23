import React from 'react'
import styled from 'styled-components'
import NanoClamp from 'nanoclamp'

const Clamp = ({children, className, lines}) => (
  <NanoClamp className={className} lines={lines} text={children} is="p" />
)

const CardText = styled(Clamp)`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #181919;
  margin: 0;
`

export default CardText
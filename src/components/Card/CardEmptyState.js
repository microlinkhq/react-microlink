// @flow
import React from 'react'
import styled from 'styled-components'

import type { CardSizes } from './index'
import CardImage from './CardImage'
import { ContentWrap } from './CardContent'

type EmptyStateProps = {
  cardSize?: CardSizes
}

const EmptyTitle = styled.span`
  height: 16px;
  width: 80%;
  display: block;
  background: #e1e8ed;
  margin: 2px 0 8px;
  opacity: 0.8;
`
const EmptyDescription = styled.span`
  height: 54px;
  width: 100%;
  display: block;
  background: #e1e8ed;
  margin-bottom: 12px;
  opacity: 0.8;
  position: relative;

  &:before, &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 6px;
    background: #fff;
  }

  &:before {
    top: 14px;
  }

  &:after {
    bottom: 14px;
  }
`
const EmptyLink = styled.span`
  height: 10px;
  width: 60%;
  display: block;
  background: #e1e8ed;
  opacity: 0.8;
`

const CardEmptyState = ({cardSize}: EmptyStateProps) => {
  return [
    <CardImage cardSize={cardSize} />,
    <ContentWrap cardSize={cardSize}>
      <EmptyTitle />
      <EmptyDescription />
      <EmptyLink />
    </ContentWrap>
  ]
}

export default CardEmptyState
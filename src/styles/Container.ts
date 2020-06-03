import styled from 'styled-components'
import { above } from './media-query'
import { containerWidth } from './vars'
import { Display } from './@types/css'
import { Points } from './@types/points'

type ContainerProp = {
  [K in Points]?: {
    display: Display
  }
} & {
  fluid?: true
  display?: Display
}

export const Container = styled.div<ContainerProp>`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  ${(p) => (p.display ? `display: ${p.display};` : '')}
  ${above.sm} {
    max-width: ${containerWidth.sm}px;
    ${(p) => (p.sm ? `display: ${p.sm.display}` : '')}
  }
  ${above.md} {
    max-width: ${containerWidth.md}px;
    ${(p) => (p.md ? `display: ${p.md.display}` : '')}
  }
  ${above.lg} {
    max-width: ${containerWidth.lg}px;
    ${(p) => (p.lg ? `display: ${p.lg.display}` : '')}
  }
  ${above.xl} {
    max-width: ${containerWidth.xl}px;
    ${(p) => (p.xl ? `display: ${p.xl.display}` : '')}
  }
  ${(p) => (p.fluid ? 'width: 100%' : '')}
`

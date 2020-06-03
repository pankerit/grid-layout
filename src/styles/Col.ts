import styled, { css } from 'styled-components'
import { above } from './media-query'
import { Display, CSSProp } from './@types/css'
import { Points } from './@types/points'

type Prop =
  | (Pick<CSSProp, 'display' | 'order' | 'alignSelf' | 'alignContent'> & {
      col: number
    })
  | number

type ColProps = {
  [K in Points]?: Partial<Prop>
} &
  Partial<Prop>

const fn = (prop: Partial<Prop>) => {
  if (!prop) return ''
  let str = ''
  if (typeof prop === 'number') {
    const width = ((prop / 12) * 100).toFixed(6)
    str += `
      flex: 0 0 ${width}%;
      max-width: ${width}%;
    `
    return str
  }
  const { display, order, alignContent, alignSelf, col } = prop
  str += css({
    order,
    display,
    alignContent,
    alignSelf,
  }).join('')

  if (col) {
    const width = ((col / 12) * 100).toFixed(6)
    str += `
    flex: 0 0 ${width}%;
    max-width: ${width}%;
  `
  }
  return str
}

export const Col = styled.div<ColProps>`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  flex-basis: 0;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;

  ${fn}
  ${above.sm} {
    ${(p) => (p.sm ? fn(p.sm) : '')}
  }
  ${above.md} {
    ${(p) => (p.md ? fn(p.md) : '')}
  }
  ${above.lg} {
    ${(p) => (p.lg ? fn(p.lg) : '')}
  }
  ${above.xl} {
    ${(p) => (p.xl ? fn(p.xl) : '')}
  }
`

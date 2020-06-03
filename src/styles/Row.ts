import styled, { css } from 'styled-components'
import { above } from './media-query'
import { Display, CSSProp } from './@types/css'
import { Points } from './@types/points'

type Prop = Pick<
  CSSProp,
  'display' | 'justifyContent' | 'alignItems' | 'flexDirection' | 'flexWrap'
> & {
  cols: number
}

type RowProps = {
  [K in Points]?: Partial<Prop>
} &
  Partial<Prop>

const fn = (prop: Partial<Prop>) => {
  if (!prop) return ''
  let str = ''
  const { cols, alignItems, display, flexDirection, flexWrap, justifyContent } = prop
  str += css({
    alignItems,
    display,
    flexWrap,
    justifyContent,
    flexDirection,
  }).join('')
  if (cols)
    str += `
    & > * {
      flex: 0 0 ${100 / cols}%;
      max-width: ${100 / cols}%;
    }
  `
  console.log(str)
  return str
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
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

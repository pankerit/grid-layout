import { Points } from './points'
export type Display = 'flex' | 'grid' | 'block' | 'inline' | 'none'

type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
type AlignItems = 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
type AlignSelf = AlignItems
type AlignContent = JustifyContent | 'stretch'

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

export type CSSProp = {
  display: Display

  margin: number
  marginX: number
  marginY: number
  marginTop: number
  marginBottom: number

  padding: number
  paddingX: number
  paddingY: number
  paddingTop: number
  paddingBottom: number

  flexDirection: FlexDirection
  flexWrap: FlexWrap
  justifyContent: JustifyContent
  alignItems: AlignItems
  alignSelf: AlignSelf
  alignContent: AlignContent
  flexGrow: number
  flexShring: number
  flexBasis: number | string

  order: number

  width: number | string
  height: number | string
}

type TagProps = {
  [K in Points]: number | {}
}

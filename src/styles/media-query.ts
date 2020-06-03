import { Points } from './@types/points'
import { breakpoints } from './vars'

export const belowFn = (breakpoint: number) => `@media (max-width: ${breakpoint - 0.001}px)`

export const aboveFn = (breakpoint: number) => `@media (min-width: ${breakpoint}px)`

export const betweenFn = (breakpointStart: number, breakpointEnd: number) =>
  `@media (min-width: ${breakpointStart}px) and (max-width: ${breakpointEnd}px)`

export const below: Record<Points, string> = {
  sm: belowFn(breakpoints['sm']),
  md: belowFn(breakpoints['md']),
  lg: belowFn(breakpoints['lg']),
  xl: belowFn(breakpoints['xl']),
}

export const above: Record<Points, string> = {
  sm: aboveFn(breakpoints['sm']),
  md: aboveFn(breakpoints['md']),
  lg: aboveFn(breakpoints['lg']),
  xl: aboveFn(breakpoints['xl']),
}

export const between = {
  sm_md: betweenFn(breakpoints['sm'], breakpoints['md']),
  sm_lg: betweenFn(breakpoints['sm'], breakpoints['lg']),
  sm_xl: betweenFn(breakpoints['sm'], breakpoints['xl']),
  md_lg: betweenFn(breakpoints['md'], breakpoints['lg']),
  md_xl: betweenFn(breakpoints['md'], breakpoints['xl']),
  lg_xl: betweenFn(breakpoints['lg'], breakpoints['xl']),
}

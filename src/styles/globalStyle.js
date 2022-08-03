import { createGlobalStyle } from "styled-components";
import BlackHanSans from '../assets/fonts/BlackHanSans-Regular.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: "BlackGanSans"
    src: url(${BlackHanSans}) format('turetype')
  }
`

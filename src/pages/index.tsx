import * as React from "react"
import { Link, HeadFC } from "gatsby"
import '../assets/css/main.scss'
import Logo from '../assets/svg/logo.svg'

const IndexPage = () => {
  return (
    <main>
      <Logo />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Not found</title>


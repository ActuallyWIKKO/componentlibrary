import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import NotFound from '../components/404NotFound'

const DomRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export function Link(props: string | React.PropsWithChildren<any>) {
  return React.createElement(
    'a',
    {
      href: props.to,
      children: props.children
    },
    props.children
  )
}

export default DomRouter

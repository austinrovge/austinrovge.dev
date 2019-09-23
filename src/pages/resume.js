import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Resume() {
  return (
    <Layout>
      <SEO title="Resume" />
      <h1>I'm always working hard to learn more.</h1>
      <p>If there are any issues with my embedded resume being displayed below, <a href="/resume.pdf" target="_blank">click here to view the PDF.</a></p>
      <object data="/resume.pdf" type="application/pdf">
        <p>Looks like there's something wrong with the embedded PDF, sorry about that! Try clicking on the link above to view it.</p>
      </object>
    </Layout>
  )
}

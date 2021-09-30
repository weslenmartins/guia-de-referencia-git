import { GetStaticProps } from 'next'
import Head from 'next/head'

import Box from '../components/Box'
import Hero from '../components/Hero'

import siteSetup from '../utils/setup'

// Create loop of tasks
export default function Home({ randomCommand, items }) {
  return (
    <>
      <Head>
        <title>{siteSetup.siteTitle} | Primeira página</title>
        <link rel="canonical" href={siteSetup.url} />
        <meta name="description" content={siteSetup.description} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${siteSetup.siteTitle}`} />
        <meta property="og:description" content={siteSetup.description} />
        <meta property="og:url" content={siteSetup.url} />
        <meta property="og:site_name" content={siteSetup.siteTitle} />
      </Head>
      <Hero
        title={randomCommand.title}
        description={randomCommand.description}
        category={randomCommand.category}
      />

      {items.map(({ category, docs }, index) => (
        <Box title={category} commands={docs} key={`box-${index}`} />
      ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${siteSetup.api}/git`)
  const data = await response.json()

  const randomCommand = data[Math.floor(Math.random() * data.length)]

  const reduceItems = data.reduce((acc, item) => {
    const { title, category, description } = item

    acc[category] = acc[category] || []
    acc[category].push({ title: title, description: description })
    return acc
  }, [])

  const items = Object.keys(reduceItems).map((category) => ({
    category,
    docs: reduceItems[category]
  }))

  return {
    revalidate: 76400,
    props: {
      items,
      randomCommand
    }
  }
}

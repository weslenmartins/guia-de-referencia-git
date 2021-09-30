import { GetServerSideProps } from 'next'
import Head from 'next/head'

import Box from '../components/Box'
import Hero from '../components/Hero'

import siteSetup from '../utils/setup'

// Create loop of tasks
export default function Random({ randomCommand, items }) {
  return (
    <>
      <Head>
        <title>
          git {randomCommand.title} | {siteSetup.siteTitle}
        </title>
        <link
          rel="canonical"
          href={`${siteSetup.url}/git/${randomCommand.title}`}
        />
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

export const getServerSideProps: GetServerSideProps = async () => {
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
    props: {
      items,
      randomCommand
    }
  }
}

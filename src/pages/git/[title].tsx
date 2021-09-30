import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Hero from '../../components/Hero'

import siteSetup from '../../utils/setup'

export default function TaskPage({ item }) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>
          git {item.title} | {siteSetup.siteTitle}
        </title>
        <link rel="canonical" href={`${siteSetup.url}/git/${item.title}`} />
        <meta name="description" content={item.description} />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={`git ${item.title} | ${siteSetup.siteTitle}`}
        />
        <meta property="og:description" content={item.description} />
        <meta
          property="og:url"
          content={`${siteSetup.url}/git/${item.title}`}
        />
        <meta property="og:site_name" content={siteSetup.siteTitle} />
      </Head>
      <Hero
        title={item.title}
        category={item.category}
        description={item.description}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${siteSetup.api}/git`)
  const gitItems = await response.json()

  const paths = gitItems.map((item) => {
    return { params: { title: item.title } }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { title } = context.params

  const response = await fetch(`${siteSetup.api}/command/${title}`)
  const data = await response.json()

  return {
    props: {
      item: data
    },
    revalidate: 60 * 60 * 24
  }
}

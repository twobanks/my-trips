import PropTypes from 'prop-types'
import client from 'graphql/client'
import { GET_PAGES, GET_PAGES_BY_SLUG } from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'
import PageTemplate from 'templates/Pages'

export default function Page({ heading, body }) {
  const router = useRouter()
  // podendo retorar num loading enquanto esta sendo criado
  if (router.isFallback) return null
  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })
  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))
  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGES_BY_SLUG, {
    slug: `${params.slug}`
  })
  if (!page) return { notFound: true }
  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

Page.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string
}

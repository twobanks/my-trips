import PropTypes from 'prop-types'
import client from 'graphql/client'
import { GET_PLACE_BY_SLUG, GET_PLACES } from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'
import PlacesTemplate from 'templates/Places'

export default function Place({ place }) {
  const router = useRouter()
  // podendo retorar num loading enquanto esta sendo criado
  if (router.isFallback) return null
  return <PlacesTemplate place={place} />
}

export async function getStaticPaths() {
  const { places } = await client.request(GET_PLACES, { first: 3 })
  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))
  return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
  const { place } = await client.request(GET_PLACE_BY_SLUG, {
    slug: `${params.slug}`
  })
  if (!place) return { notFound: true }
  return {
    props: {
      place
    }
  }
}

Place.propTypes = {
  place: PropTypes.shape({
    slug: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.shape({
      html: PropTypes.string
    }),
    gallery: PropTypes.any
  })
}

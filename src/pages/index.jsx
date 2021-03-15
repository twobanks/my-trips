import client from 'graphql/client'
import { GET_PLACES } from 'graphql/queries'
import PropTypes from 'prop-types'
import HomeTemplate from 'templates/Home'

export default function Home({ places }) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request(GET_PLACES)
  return {
    props: {
      places
    }
  }
}

Home.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      slug: PropTypes.string,
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number
      })
    })
  )
}

import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }) {
  return (
    <>
      <NextSeo
        title="My trips"
        description="A simple project to show my favorite spots in the Brazil."
        canonical="https://my-trips.twobanks.com.br"
        openGraph={{
          url: 'https://my-trips.twobanks.com.br',
          title: 'My Trips',
          description:
            'A simple project to show my favorite spots in the Brazil.',
          images: [
            {
              url: 'https://my-trips.twobanks.com.br/img/me.jpg',
              width: 960,
              height: 960,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

HomeTemplate.defaultProps = {
  places: [
    {
      id: '1',
      name: 'Uberaba',
      slug: 'uberaba',
      location: {
        latitude: 5,
        longitude: 2
      }
    }
  ]
}
HomeTemplate.propTypes = {
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

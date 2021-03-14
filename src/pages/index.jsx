import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from 'components/LinkWrapper'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const place = {
  id: '1',
  name: 'Uberaba',
  slug: 'uberaba',
  location: {
    latitude: 10,
    longitude: 2
  }
}

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={[place]} />
    </>
  )
}

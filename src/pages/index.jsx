import dynamic from 'next/dynamic'

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
  return <Map places={[place]} />
}

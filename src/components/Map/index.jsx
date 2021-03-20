import { useRouter } from 'next/dist/client/router'
import PropTypes from 'prop-types'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url={`https://api.mapbox.com/styles/v1/twobanks/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
      /* url="https://api.mapbox.com/styles/v1/twobanks/ckmi2fg5e50zw17n4y31ow2yh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHdvYmFua3MiLCJhIjoiY2tqcDZoc2dpOG9sazJ5cWpkeWdhZ3RsNyJ9.UYYw5c_6MD6xSXvgV9ztuQ" */
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  )
}

const Map = ({ places }) => {
  const router = useRouter()
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <CustomTileLayer />

      {places.map(({ id, slug, name, location }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
            eventHandlers={{
              click: () => {
                router.push(`/place/${slug}`)
              }
            }}
          />
        )
      })}
    </MapContainer>
  )
}
Map.defaultProps = {
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
Map.propTypes = {
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

export default Map

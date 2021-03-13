import PropTypes from 'prop-types'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const Map = ({ places }) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', with: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places && (
        <>
          {places.map(({ id, name, location }) => {
            const { latitude, longitude } = location
            return (
              <Marker
                position={[latitude, longitude]}
                title={name}
                key={`place-${id}`}
              />
            )
          })}
        </>
      )}
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

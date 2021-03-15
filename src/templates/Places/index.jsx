import PropTypes from 'prop-types'

export default function PlacesTemplate({ place }) {
  return (
    <>
      <h1>{place.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: place.description.html }} />
      {place.gallery.map((image, index) => (
        <img key={`photo-${index}`} src={image.url} alt={place.name} />
      ))}
    </>
  )
}

PlacesTemplate.propTypes = {
  place: PropTypes.shape({
    slug: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.shape({
      html: PropTypes.string
    }),
    gallery: PropTypes.any
  })
}

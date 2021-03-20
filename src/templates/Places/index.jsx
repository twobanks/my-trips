import Image from 'next/image'
import { NextSeo } from 'next-seo'
import LinkWrapper from '@/components/LinkWrapper'
import PropTypes from 'prop-types'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import * as S from './styled'
import { useRouter } from 'next/dist/client/router'

export default function PlacesTemplate({ place }) {
  const router = useRouter()
  if (router.isFallback) return null
  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'A simple project to show my favorite spots in the Brazil.'
        }
        canonical="https://my-trips.twobanks.com.br"
        openGraph={{
          url: 'https://my-trips.twobanks.com.br',
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'A simple project to show my favorite spots in the Brazil.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description.html }}
          />
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                height={600}
                width={1000}
                quality={75}
                alt={place.name}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}

PlacesTemplate.propTypes = {
  place: PropTypes.shape({
    slug: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.shape({
      html: PropTypes.string,
      text: PropTypes.string
    }),
    gallery: PropTypes.any
  })
}

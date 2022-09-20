import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { optionsLightbox } from '../../utils/constant'
import GallerySlide from '../Slider/Gallery-slide'

export default function Gallery2() {
  const galleryImages = [
    {
      imageUrl: "/images/Aliya-1.jpeg",
      name: "Aliya & Arda"
    },
    {
      imageUrl: "/images/Aliya-2.jpeg",
      name: "Aliya & Arda"
    },
    {
      imageUrl: "/images/Aliya-3.jpeg",
      name: "Aliya & Arda"
    },
    {
      imageUrl: "/images/Aliya-4.jpeg",
      name: "Aliya & Arda"
    },
    {
      imageUrl: "/images/Aliya-5.jpeg",
      name: "Aliya & Arda"
    },
    {
      imageUrl: "/images/Aliya-6.jpeg",
      name: "Aliya & Arda"
    },
    {
      imageUrl: "/images/Aliya-7.jpeg",
      name: "Aliya & Arda"
    },
    {
      imageUrl: "/images/Aliya-8.jpeg",
      name: "Aliya & Arda"
    },
    {
      imageUrl: "/images/Aliya-9.jpeg",
      name: "Aliya & Arda"
    }
  ]

  return (
    <section className="max-w-4xl mx-auto">
      <SimpleReactLightbox>
        <SRLWrapper options={optionsLightbox}>
          <div className="relative text-center py-10 px-6 mb-10">
            <div className="block-bg"></div>
            <div className="transbox">
              <h2 className="text-brown-dark handwriting text-5xl mb-5">Gallery</h2>
              <GallerySlide dataImage={galleryImages} />
            </div>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </section>
  )
}
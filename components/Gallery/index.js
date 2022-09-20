import { useState, useEffect } from 'react';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { useRouter } from 'next/router'
import { optionsLightbox } from '../../utils/constant'
import { calculateTimeLeft } from '../../utils/customFunc'

export default function Gallery() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000);
  }, [])

  const galleryImages = [
    {
      imageUrl: "/images/gallery-1.jpeg",
      name: "Olivia & Rifan"
    },
    {
      imageUrl: "/images/gallery-2.jpeg",
      name: "Olivia & Rifan"
    },
    {
      imageUrl: "/images/gallery-3.jpeg",
      name: "Olivia & Rifan"
    },
    // {
    //   imageUrl: "/images/Aliya-4.jpeg",
    //   name: "Olivia & Rifan"
    // },
    // {
    //   imageUrl: "/images/Aliya-5.jpeg",
    //   name: "Olivia & Rifan"
    // },
    // {
    //   imageUrl: "/images/Aliya-6.jpeg",
    //   name: "Olivia & Rifan"
    // },
    // {
    //   imageUrl: "/images/Aliya-7.jpeg",
    //   name: "Olivia & Rifan"
    // },
    // {
    //   imageUrl: "/images/Aliya-8.jpeg",
    //   name: "Olivia & Rifan"
    // },
    // {
    //   imageUrl: "/images/Aliya-9.jpeg",
    //   name: "Olivia & Rifan"
    // }
  ];
  
  return (
    <section className="mx-4 mt-5 md:mt-10 mb-10 max-w-3xl mx-auto">
      {/* <div className="heading-background mb-5">
        <h1>GALLERY</h1>
        <h2>Aliya & Arda</h2>
      </div> */}
      <h2 className="handwriting-name text-center mb-2" style={{fontSize: '2rem'}}>Counting Days</h2>
      <div className="grid grid-cols-4 mx-auto mb-4" style={{maxWidth: '85%'}}>
        <div className="text-center">
          <p className="text-lg">{timeLeft.days}</p>
          <small>Days</small>
        </div>
        <div className="text-center">
          <p>{timeLeft.hours}</p>
          <small>Hours</small>
        </div>
        <div className="text-center">
          <p>{timeLeft.minutes}</p>
          <small>Minutes</small>
        </div>
        <div className="text-center">
          <p>{timeLeft.seconds}</p>
          <small>Seconds</small>
        </div>
      </div>


      <SimpleReactLightbox>
        <SRLWrapper options={optionsLightbox}>
          <div className="">
            {galleryImages.slice(0, 3).map((image, index) => (
              <div key={index} className='mb-4'>
                <img 
                  src={image.imageUrl}
                  alt={image.name}
                  className={`rounded-md max-w-full`}
                />
              </div>
            ))}
          </div>
          {/* <img 
            src="/images/dummy/couple-3.JPG" 
            alt="Gallery 3" 
            className="rounded-md max-w-full mt-5" 
            data-aos="zoom-in" 
            data-aos-delay="1100"
          /> */}
        </SRLWrapper>
      </SimpleReactLightbox>
      <div className="flex justify-center items-center mt-4">
        <button 
          className="btn-tertiary" 
          type="button"
          onClick={() => router.push(`/detail-gallery`)}
        >Lihat Selengkapnya</button>
      </div>
    </section>
  )
}
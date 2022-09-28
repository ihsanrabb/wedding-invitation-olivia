import { useState } from 'react'
import { useRouter } from 'next/router'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { dataImageDetail } from '../utils/localData'
import AudioPlayer from '../components/AudioPlayer'
import ReactPlayer from 'react-player'
import Footer from '../components/Footer'

const options = {
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showThumbnailsButton: false,
    showNextButton: true,
    showPrevButton: true
  },
  caption: {
    captionColor: "#fff",
    captionFontSize: "60px"
  },
  settings: {
    overlayColor: "rgba(201,197,186, .9)",
  },
  thumbnails: {
    thumbnailsAlignment: "center"
  }
}

export default function DetailGallery() {
  const router = useRouter()
  const [videoPlaying, setVideoPlaying] = useState(false)

  return (
    <SimpleReactLightbox>
      <div className="mt-10">
        <div className="heading-background">
          <h1>GALLERY</h1>
          <h2>Rifan & Olivia</h2>
        </div>
        <div className="max-w-xl mx-auto p-4 md:p-0">
          <div 
            className="cursor-pointer mb-5 flex items-center"
            onClick={() => router.push(`/invitation`)}
          >
            <img className="w-5 mr-2 md:mr-4" src="/images/icon/back-arrow.svg" />
            <p className="text-maroon">KEMBALI</p>
          </div>
          {/* <section className="mb-5">
            <div className="flex flex-col justify-center items-center mt-6">
              <img className="w-11/12 md:w-2/3 opacity-90" src="/images/frame-top-grey.png" />
            </div>
            <ReactPlayer 
              url='https://youtu.be/4ygReJA2yCk'
              controls
              playing={videoPlaying}
              onStart={() => setVideoPlaying(true)}
              onPlay={() => setVideoPlaying(true)}
              onPause={() => setVideoPlaying(false)}
              className="max-w-full w-full h-60 md:h-80 rounded-md" 
            />
            <div className="flex flex-col justify-center items-center mt-8">
              <img className="w-2/3 md:w-2/4 opacity-90" src="/images/frame-bottom-grey.png" />
            </div>
          </section> */}
          <SRLWrapper options={options}>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {dataImageDetail.map((img, index) => (
                <a href={img.src} key={index}>
                  <img src={img.src} alt={img.caption} className="rounded-md max-w-full" />
                </a>
              ))}
            </div>
          </SRLWrapper>
        </div>
      </div>
      <AudioPlayer 
        controlFromParent
        isPlaying={!videoPlaying}
      />
      <Footer />
    </SimpleReactLightbox>
  )
}
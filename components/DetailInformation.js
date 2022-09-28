import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { optionsLightbox } from '../utils/constant'
import ReactPlayer from 'react-player'
import { dataImageProkes } from '../utils/localData'
import GallerySlide from './Slider/Gallery-slide'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export default function DetailInformation({streamingList}) {
  return (
    <section className="mt-2 mb-10 max-w-xl mx-auto">
      <div className="heading-background">
        <Slide left>
          <h1>INFORMASI</h1>
          <h2>Rifan & Olivia</h2>
        </Slide>
      </div>
      <h4 className="text-center mt-4">
        Pernikahan kami akan diselengarakan dengan memperhatikan tata tertib dan protokol kesehatan. Dikarenakan masih dalam masa pandemi, jumlah tamu undangan juga terbatas. Demi keamanan dan kenyamanan bersama, para hadirin undangan dihimbau untuk memenuhi beberapa peraturan berikut:
      </h4>
      <div className="px-1 mt-4">
        {/* <div className="flex items-center mb-3">
          <img 
            src="/images/icon/ic-forbidden.png" 
            className="w-10 md:w-12 mr-2"
          />
          <p>Dihimbau untuk tidak memberikan karangan bunga.</p>
        </div>
        <div className="flex items-center mb-3">
          <img 
            src="/images/icon/ic-building.png" 
            className="w-10 md:w-12 mr-2"
          />
          <p>Jumlah Tamu per sesi dibatasi hanya 30% dari kapasitas gedung.</p>
        </div> */}
        <div className="flex items-center mb-3">
          <Fade left>
            <img 
              src="/images/icon/ic-covid-2.png" 
              className="w-10 md:w-12 mr-2"
            />
            <p className="text-lg">Menjaga jarak antar tamu.</p>
          </Fade>
        </div>
        <div className="flex items-center mb-3">
          <Fade left>
            <img 
              src="/images/icon/ic-covid-4.png" 
              className="w-10 md:w-12 mr-2"
            />
            <p className="text-lg">Pemeriksaan suhu tubuh dan scan aplikasi Peduli Lindungi.</p>
          </Fade>
        </div>
        <div className="flex items-center mb-3">
          <Fade left>
            <img 
              src="/images/icon/ic-covid-1.png" 
              className="w-10 md:w-12 mr-2"
            />
            <p className="text-lg">Menggunakan masker</p>
          </Fade>
        </div>
        <div className="flex items-center mb-3">
          <Fade left>
            <img 
              src="/images/icon/ic-covid-3.png" 
              className="w-10 md:w-12 mr-2"
            />
            <p className="text-lg">Mencuci tangan atau menggunakan hand sanitizer</p>
          </Fade>
        </div>
        {/* <div className="flex items-center mb-3">
          <img 
            src="/images/icon/ic-child.png" 
            className="w-10 md:w-12 mr-2"
          />
          <p>Dihimbau untuk tidak membawa anak dibawah 8 tahun.</p>
        </div> */}
      </div>
      {/* <SimpleReactLightbox>
        <SRLWrapper options={optionsLightbox}>
          <div className="relative text-center py-10 px-6 mb-10">
            <div className="block-bg"></div>
            <div className="transbox">
              <h2 className="text-brown-dark handwriting text-5xl mb-3">Protokol Kesehatan</h2>
              <GallerySlide dataImage={dataImageProkes} />
            </div>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox> */}
      <div className="flex flex-col items-center justify-center mt-10 mb-10">
        <img className="opacity-90" src="/images/icon/separate-leaf.png" width="90%" />
      </div>
    </section>
  )
}
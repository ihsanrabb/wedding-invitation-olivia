import { useState, useEffect } from 'react'
import { useWeddingContext } from '../../WeddingContext'

const generateWordingStreaming = (item) => {
  if(item.wording) {
    return item.wording
  }

  switch(item.type) {
    case 'zoom':
      return 'Menuju Zoom Meetings'
    case 'gmeet':
      return 'Menuju Google Meet'
    default:
      return 'Menuju Live Streaming'
  }
}

export default function DetailWedding2({streamingList}) {
  const {
    globalState: {
      userDataRSVP
    }
  } = useWeddingContext()

  return (
    <section className="max-w-xl mx-auto">
      <div className="relative text-center py-12 px-6 mb-5 flex items-center rounded" style={{minHeight: 300, backgroundColor: '#545454'}}>
        {/* <div className="block-bg"></div> */}
        <div className="transbox relative">
          <img src="/images/olivia-akad.jpeg" className="rounded w-full" />
          <div className="flex justify-center w-full" style={{position: "absolute", bottom: 56}}>
            <img src="/images/text-akad.png" className="w-4/5"  />
          </div>
          {/* <h2 className="text-black underline text-3xl mt-4 font-bold">Akad Nikah :</h2> */}
          <p className="text-xl font-desc text-white mt-6">Sabtu, 22 Oktober 2022</p>
          <p className="text-xl font-desc text-white">Pukul 16.00 WIB</p>          
        </div>
      </div>

      <div className="relative text-center py-12 px-6 mt-10 rounded" style={{minHeight: 300, backgroundColor: '#545454'}}>
        {/* <div className="block-bg"></div> */}
        <div className="transbox relative">
          <img src="/images/olivia-resepsi.jpeg" className="rounded w-full" />
          <div className="flex justify-center w-full" style={{position: "absolute", bottom: 222}}>
            <img src="/images/text-resepsi.png" className="w-7/12"  />
          </div>
          {/* <h2 className="text-black underline text-3xl mt-4 font-bold">Resepsi :</h2> */}
          <p className="text-xl font-desc mt-6 text-white">Sabtu, 22 Oktober 2022</p>
          <p className="text-xl font-desc text-white">Sesi I: Pukul 18.30 WIB - 19.45 WIB</p>
          <p className="text-xl font-desc text-white">Sesi II: Pukul 19.45 WIB - 21.00 WIB</p>
          <p className="mt-4 text-xl font-desc text-white">Bertempat di Hallf Patiunus</p>
          <p className="text-white">Jl. Pati Unus No.F4, RT.4/RW.4, Gunung, Kec. Kby. Baru, Kota Jakarta Selatan</p>
          <div className="btn-primary mt-3"> 
            <a 
              href="https://goo.gl/maps/zoGKSp83ty4YwrkH9" 
              target="_blank"
              className="font-desc"
            >
              PETUNJUK ARAH KE LOKASI
            </a>
          </div>
          
        </div>
      </div>


      {/* <div className="relative text-center py-24 px-6">
        <div className="block-bg"></div>
        <div className="transbox">
          <h2 className="text-brown-dark handwriting text-5xl">Resepsi :</h2>
          <p className="text-xl">Hari Minggu, 1 Juli 2021</p>
          <p className="text-xl">Pukul 13.00 - 15.00 WIB</p>
          <p className="mt-4 mb-4 text-sm">Jl. Gatot Subroto No.Kav. 37, RT.6/RW.3, Kuningan Timur, Setiabudi, Jakarta Selatan.</p>
          <div className="btn-tertiary"> 
            <a 
              href="https://goo.gl/maps/QbJcmuH1Fyh8Usnf8" 
              target="_blank"
            >
              PETUNJUK ARAH KE LOKASI
            </a>
          </div>
        </div>
      </div> */}
      <div className="text-center">
        <p className="mb-2">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
        </p>
        <p>Atas Kehadiran Bapak/Ibu/Saudara/i, Kami ucapkan terima kasih.</p>
        <h2 className="wording-salam-2 mt-3">Wassalamualaikum Warahmatullahi Wabarakatuh</h2>
      </div>
    </section>
  )
}
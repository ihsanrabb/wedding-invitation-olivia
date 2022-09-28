import {useState, useEffect} from 'react'
import { db } from '../firebase'
import { useRouter } from 'next/router'
import {logEvent} from '../utils/eventAnalytics'
import AudioPlayer from '../components/AudioPlayer'
import Footer from '../components/Footer'
import { COLLECTION_BEST_PRAY, COUPLE_NAME } from '../utils/constant'

export default function UcapanDanDoa() {
  const router = useRouter()
  const [bestPrayList, setBestPrayList] = useState([])

  useEffect(() => {
    initData()
    router.events.on('routeChangeComplete', logEvent)
    logEvent(window.location.pathname)
    return () => {
      router.events.off('routeChangeComplete', logEvent)
    }
  }, [])

  const initData = async () => {
    try {
      const response = await db.collection(COLLECTION_BEST_PRAY)
        .where("ownedBy", "==" , `${COUPLE_NAME}`)
        .orderBy("date", "desc")
        .get();
      let listPray = []
      response.forEach(function(doc) {
        listPray.push({
          id:doc.id,
          data:doc.data()
        })
      })
      setBestPrayList(listPray)
    } catch(error) {
      console.error("Error get document: ", error)
    }
  }

  return (
    <>
      <div className="mt-10">
        <div className="heading-background">
          <h1>UCAPAN & DOA</h1>
          <h2>Rifan & Olivia</h2>
        </div>
        <div className="pt-5 pb-5 mt-4 md:pt-10 md:pb-10 md:mt-8">
          <div className="max-w-xl mx-auto p-4 md:p-0">
            <div 
              className="cursor-pointer mb-5 flex items-center"
              onClick={() => router.back()}
            >
              <img className="w-5 mr-2 md:mr-4" src="/images/icon/back-arrow.svg" />
              <p className="text-maroon">KEMBALI</p>
            </div>
            {bestPrayList < 1 && (
              <h1 className="text-center mb-10 mt-10">Tunggu sebentar ya...</h1>
            )}
            {bestPrayList && (
              bestPrayList.map(item => (
                <div className="card-doa" key={item.id}>
                  <p className="text-lg mb-3">{item.data.bestPray}</p>
                  <hr className="border-gray-400"></hr>
                  <p className="mt-1 text-md font-semibold">{item.data.name}</p>
                  <small>{item.data.group}</small>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <AudioPlayer />
      <Footer />
    </>
  )
}
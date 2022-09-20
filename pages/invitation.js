import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import HeroCouple from '../components/HeroCouple'
import DetailCouple2 from '../components/DetailCouple/design-2'
import DetailWedding2 from '../components/DetailWedding/design-2'
import FormRSVP2 from '../components/FormRSVP/design-2'
import UcapanDanDoa from '../components/UcapanDanDoa'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import DetailInformation from '../components/DetailInformation'
import { initDataBestPray, initDataDetailUser } from '../utils/customFunc'
import AudioPlayer from '../components/AudioPlayer'
// import RSVPConfirmation2 from '../components/RSVPConfirmation/design-2'
import { useWeddingContext } from '../WeddingContext'
import { db } from '../firebase'
import { COLLECTION_RSVP } from '../utils/constant'
import LoadingCover from '../components/LoadingCover'
// import KadoOnline from '../components/KadoOnline'
export default function Invitation2() {
  const router = useRouter()
  const { to, tamu } = router.query
  const [bestPrayList, setBestPrayList] = useState([])
  const [streamingList, setStreamingList] = useState([])
  const [groupList, setGroupList] = useState([])
  const [videoPlaying, setVideoPlaying] = useState(false)
  const [isShowKadoOnline, setShowKadoOnline] = useState(false)
  const {
    globalState: {
      userDataRSVP,
      pending,
      detailUser
    },
    dispatch
  } = useWeddingContext()

  useEffect(() => {
    if(tamu && !userDataRSVP) {
      getDetailRSVP()
    }
    const timeOutBestPray = setTimeout(async () => {
      const response = await initDataBestPray()
      setBestPrayList(response)
    }, 2000)
    const timeOutKado = setTimeout(() => {
      setShowKadoOnline(true)
    }, 5000)
    initDataDetailUser(setGroupList, setStreamingList, dispatch)
    return () => {
      clearTimeout(timeOutBestPray)
      clearTimeout(timeOutKado)
    }
  }, [])

  const getDetailRSVP = async () => {
    dispatch({type: 'SET_PENDING', payload: true})

    try {
      const response = await db.collection(COLLECTION_RSVP).doc(tamu).get()
      if (response.exists) {
        dispatch({type: 'SET_USER_DATA_RSVP', payload: response.data()})
        dispatch({type: 'SET_PENDING', payload: false})
      }
    } catch(error) {
      console.log('error get detail user', error)
    }
  }

  return (
    <>
      <HeroCouple />
      <div className="mx-4 mt-6">
        <DetailCouple2 />
        <div className="h-5" />
        <DetailWedding2 streamingList={streamingList} />
        <div className="h-10" />
        {/* {(userDataRSVP || tamu) && (
          <RSVPConfirmation2 
            tamuID={tamu} 
            setBestPrayList={setBestPrayList}
          />
        )} */}
        {(!userDataRSVP && !tamu) && (
          <FormRSVP2 
            // initDataBestPray={initDataBestPray}
            setBestPrayList={setBestPrayList}
            to={to}
            groupList={groupList}
          />
        )}
      </div>
      <UcapanDanDoa bestPrayList={bestPrayList} />
      <div className="h-10" />
      <div className="mx-4">
        <Gallery />
        <DetailInformation />
      </div>
      {/* <KadoOnline /> */}
      <AudioPlayer 
        controlFromParent
        isPlaying={!videoPlaying}
      />
      <Footer />
      {pending && <LoadingCover />}
    </>
  )
}

Invitation2.getInitialProps = async ctx => ({to: ctx.query.to, tamu: ctx.query.tamu})
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useWeddingContext } from '../WeddingContext'
import { db } from '../firebase'
import { COLLECTION_RSVP } from '../utils/constant'
import LoadingCover from '../components/LoadingCover'

export default function Preview2() {
  const router = useRouter()
  const { to, tamu } = router.query
  const {
    globalState: {
      userDataRSVP,
      pending
    },
    dispatch
  } = useWeddingContext()

  useEffect(() => {
    if(tamu) {
      getDetailRSVP()
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

  const handleRoute = () => {
    if(to) {
      router.push(`/invitation/?to=${to}`)
    } else if(tamu) {
      router.push(`/invitation/?tamu=${tamu}`)
    } else {
      router.push(`/invitation`)
    }
  }

  return (
    <>
      <section 
        className="cover-bg-img"
        style={{backgroundImage: `url('/images/olivia-home.jpeg')` }}
      >
        <div style={{zIndex: 2}} className="flex flex-col items-center justify-end relative h-full py-14">
          <div className="flex flex-col items-center">
            <p className="text-center font-desc text-lg text-white">You are invited to our wedding</p>
            <img src="/images/olivia-rifan-text.png" alt="olivia flower" className="md:w-1/4 w-5/6 h-5/6" />
            {/* <h2 className="handwriting-name animate__animated animate__zoomIn" style={{color: '#C7A82D'}}>
              Olivia & Rifan 
            </h2> */}
          </div>
          {/* <h6 className="text-xl font-desc text-white">
            The wedding of
          </h6> */}
          
          {/* <p className="italic text-xl mt-2 font-desc">Sabtu</p>
          <h3 className="text-xl font-desc">
            21 / Mei / 2022
          </h3> */}
        
          <div className="text-center text-white mt-8 flex flex-col items-center">
            
            {/* <div className="flex flex-col justify-center items-center mb-2">
              <img className="w-1/3 md:w-40 opacity-90" src="/images/divider-letter.png" />
            </div> */}
            {(to || userDataRSVP) && (
              <>
                <p className="font-desc text-lg">Kepada Yth, Bapak/Ibu/Saudara/i</p>
                <p className="mt-3 text-3xl text-center handwriting">
                  {to ? to : userDataRSVP?.name}
                </p>
              </>
            )}
            <button 
              className="btn-secondary mt-4 font-desc font-xl"
              onClick={handleRoute}
            >
              Buka Undangan
            </button>
          </div>
        </div>
      </section>
      {pending && <LoadingCover />}
    </>
  )
}

Preview2.getInitialProps = async ctx => ({to: ctx.query.to, tame: ctx.query.tamu})
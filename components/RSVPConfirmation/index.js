import { useState, useEffect } from 'react'
import { calculateTimeLeft, getSessionAttendance } from '../../utils/customFunc'
import { db } from '../../firebase'
import { COLLECTION_RSVP, DOC_INFO_DETAIL } from '../../utils/constant'
import { useWeddingContext } from '../../WeddingContext'

export default function RSVPConfirmation({ tamuID }) {
  const [timeLeft, setTimeLeft] = useState({})
  const [phoneNumber, setPhoneNumber] = useState('')
  const [confirmSelected, setConfirmSelected] = useState('')
  const [loadingForm, setLoadingForm] = useState(false)
  const [formError, setFormError] = useState({})
  const [submitRSVP, setSubmitRSVP] = useState(false)
  const {
    globalState: {
      userDataRSVP
    }
  } = useWeddingContext()

  useEffect(() => {
    setTimeLeft(calculateTimeLeft())
  }, [])

  const handleChange = (e) => {
    setFormError({})
    setConfirmSelected(e.target.value)
  }

  const onSubmitConfirmation = () => {
    if(!confirmSelected) return setFormError({confirmSelected: true})

    if(confirmSelected !== "NO") {
      if(!phoneNumber) {
        return setFormError({phoneNumber: true})
      }
      const data = {
        guest: +confirmSelected,
        rsvpStatus: 'CONFIRM',
        phoneNumber: phoneNumber
      }
      updateRSVP(data)
      updateDetailInfo()
    } else {
      const data = {
        guest: 0,
        rsvpStatus: 'NOT_CONFIRM'
      }
      updateRSVP(data)
    }
  }

  const updateRSVP = async (data) => {
    setLoadingForm(true)

    try {
      await db.collection(COLLECTION_RSVP).doc(tamuID).update(data)
      setLoadingForm(false)
      setSubmitRSVP(true)
    } catch(error) {
      console.log('error update rsvp', error)
    }
  }

  const updateDetailInfo = () => {
    const infoDetailRef = db.collection("infoDetail").doc(DOC_INFO_DETAIL)
    db.runTransaction((transaction) => {
      return transaction.get(infoDetailRef).then((infoDoc) => {
        let newInfoDetail = {
          guestSum: infoDoc.data().guestSum + +confirmSelected,
          guestSumDashboard: infoDoc.data().guestSumDashboard + +confirmSelected,
          updatedAt: new Date()
        }
        transaction.update(infoDetailRef, newInfoDetail)
      })
    }).then(() => {
      console.log('sukses update detail')
    }).catch((err) => {
      setLoadingForm(false)
      console.error(err);
    })
  }

  return (
    <section className="mt-20 max-w-xl mx-auto">
      <div className="heading-background">
        <h1>RESERVASI</h1>
        <h2>Desy & Desy</h2>
      </div>
      <div className="countdown-wrap">
        <h2>{timeLeft.days} Hari Lagi</h2>
        <img 
          src="/images/top-flower-min.png" 
          className="flower-countdown-top" 
          alt="flower-top" 
        />
        <img 
          src="/images/bottom-flower-min.png" 
          className="flower-countdown-bottom" 
          alt="flower-bottom" 
        />
      </div>
      <p className="text-center mt-10 mb-3">
        Harap melakukan RSVP sebelum tanggal <span className="font-bold"><br/>16 Juli 2021</span>
      </p>
      
      <div className="bg-brown-light rounded p-3">
        {(!submitRSVP && userDataRSVP?.rsvpStatus === 'NEED_CONFIRMATION') && (
          <>
            <label className={`box-confirmation ${confirmSelected === '1' && `border-2 border-secondary`}`}>
              <p className="text-lg md:text-xl">YA, kami akan menghadiri ( 1 orang )</p>
              <input
                name="confirmation"
                type="radio"
                value={`1`}  
                onChange={handleChange}
              />
            </label>
            <label className={`box-confirmation ${confirmSelected === '2' && `border-2 border-secondary`}`}>
              <p className="text-lg md:text-xl">YA, kami akan menghadiri ( 2 orang )</p>
              <input
                name="confirmation"
                type="radio"
                value={`2`}  
                onChange={handleChange}
              />
            </label>
            <label className={`box-confirmation ${confirmSelected === 'NO' && `border-2 border-secondary`}`}>
              <p className="text-lg md:text-xl">Maaf, kami TIDAK dapat menghadiri</p>
              <input
                name="confirmation"
                type="radio"
                value={`NO`}  
                onChange={handleChange}
              />
            </label>
            {formError.confirmSelected && <small className="text-red-700">Mohon pilih untuk konfirmasi</small>}
            {(confirmSelected !== 'NO' && confirmSelected) && (
              <>
                <label 
                  className="block mb-2 text-white animate__animated animate__fadeIn" 
                  htmlFor="phoneNumber"
                >
                  Nomer Handphone: *
                </label>
                <input 
                  className="input-base p-2 shadow-md animate__animated animate__fadeIn" 
                  type="text" 
                  name="phoneNumber"
                  placeholder="Tulis nomer handphone kamu"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {formError.phoneNumber && <small className="text-red-700">Nomer Handphone kamu harus diisi ya</small>}
              </>
            )}
            <button 
              className={loadingForm ? "btn-gray w-full mt-5" : "btn-tertiary w-full mt-5"} 
              type="button"
              onClick={onSubmitConfirmation}
              disabled={loadingForm}
            >
              {loadingForm ? "Loading..." : "KONFIRMASI"}
            </button>
          </>
        )}
        
        {((submitRSVP && confirmSelected !== 'NO') || userDataRSVP?.rsvpStatus === 'CONFIRM') && (
          <div className="wrap-qrcode animate__animated animate__fadeIn">
            <p>
              Hi {userDataRSVP?.name}! Terima kasih telah mengkonfirmasi kehadiranmu, di acara pernikahan kami.
              <br />
              {getSessionAttendance(userDataRSVP.eventSession) && (
                <>
                  <br />
                  Kamu masuk ke dalam
                  <span className="font-semibold"> {getSessionAttendance(userDataRSVP.eventSession).sesi}</span>
                  <br />
                  <span className="font-semibold">{getSessionAttendance(userDataRSVP.eventSession).time}</span>
                  <br />
                </>
              )}
              <br />
              Mohon untuk hadir sesuai dengan jam sesi yang sudah ditentukan ya! See You
              <br />
              <br />
              Desy & Desy
            </p>
            <img 
              className="w-full mt-2 mb-2 border-maroon border-2" 
              src={`https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${tamuID}`}
            />
            <p>Capture dan Tunjukkan QR Code ini kepada penerima tamu.</p>
          </div>
        )}  

        {((submitRSVP && confirmSelected === 'NO') || userDataRSVP?.rsvpStatus === 'NOT_CONFIRM') && (
          <div className="wrap-qrcode animate__animated animate__fadeIn">
            <p>
              Hi {userDataRSVP?.name}! Terima kasih telah mengkonfirmasi kehadiranmu, di acara pernikahan kami.
              <br />
              <br />
              Desy & Desy
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
import { useState, useEffect } from 'react'
import { calculateTimeLeft, createBestPrayList } from '../../utils/customFunc'
import { db } from '../../firebase'
import { COLLECTION_RSVP, DOC_INFO_DETAIL } from '../../utils/constant'
import { useWeddingContext } from '../../WeddingContext'

export default function RSVPConfirmation2({ tamuID, setBestPrayList }) {
  const [timeLeft, setTimeLeft] = useState({})
  const [phoneNumber, setPhoneNumber] = useState('')
  const [bestPray, setBestPray] = useState('')
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
    const intervalId = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const handleChange = (e) => {
    setFormError({})
    setConfirmSelected(e.target.value)
  }

  const onSubmitConfirmation = () => {
    if(!confirmSelected) return setFormError({confirmSelected: true})

    if(confirmSelected !== "NO") {
      const data = {
        guest: +confirmSelected,
        rsvpStatus: 'CONFIRM_ATTEND',
        phoneNumber: phoneNumber
      }
      updateRSVP(data)
      updateDetailInfo()
    } else {
      const data = {
        guest: 0,
        rsvpStatus: 'NOT_ATTEND'
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
      if(bestPray) {
        onCreateBestPray()
      }
    }).catch((err) => {
      setLoadingForm(false)
      console.error(err);
    })
  }

  const onCreateBestPray = () => {
    const data = {
      name: userDataRSVP.name,
      bestPray: bestPray,
      group: userDataRSVP.group ?? ""
    }
    createBestPrayList(
      data,
      setSubmitRSVP,
      setLoadingForm,
      setBestPrayList
    );
  }

  return (
    <section className="max-w-xl mx-auto">
      <div className="heading-background">
        <h1>RESERVASI</h1>
        <h2>Aliya & Arda</h2>
        <p className="text-sm">Silahkan Konfirmasi Kehadiran Anda,</p>
      </div>
      <p className="font-cormorant text-xl text-center mb-3">
        <span className="text-brown-dark text-4xl">{timeLeft.days}</span> Hari 
        <span className="text-brown-dark text-4xl"> {timeLeft.hours}</span> Jam 
        <span className="text-brown-dark text-4xl"> {timeLeft.minutes}</span> Menit 
        <span className="text-brown-dark text-4xl"> {timeLeft.seconds}</span> Detik
      </p>
      <div className="relative py-10 rounded px-6 mt-2 bg-brown-dark">
        <div className="block-bg"></div>
        <div className="transbox">
          {(!submitRSVP && userDataRSVP?.rsvpStatus === 'NEED_CONFIRMATION') && (
            <>
              <label className={`box-confirmation ${confirmSelected === '1' && `border-2 border-secondary`}`}>
                <p className="md:text-xl">YA, kami akan menghadiri (1 Orang)</p>
                <input
                  name="confirmation"
                  type="radio"
                  value={`1`}  
                  onChange={handleChange}
                />
              </label>
              <label className={`box-confirmation ${confirmSelected === '2' && `border-2 border-secondary`}`}>
                <p className="md:text-xl">YA, kami akan menghadiri (2 orang)</p>
                <input
                  name="confirmation"
                  type="radio"
                  value={`2`}  
                  onChange={handleChange}
                />
              </label>
              <label className={`box-confirmation ${confirmSelected === 'NO' && `border-2 border-secondary`}`}>
                <p className="md:text-xl">Maaf, kami TIDAK dapat menghadiri</p>
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
                    className="block mb-2 animate__animated animate__fadeIn" 
                    htmlFor="phoneNumber"
                  >
                    Nomer Handphone : 
                  </label>
                  <input 
                    className="input-base p-2 shadow-md animate__animated animate__fadeIn" 
                    type="text" 
                    inputMode="numeric"
                    name="phoneNumber"
                    placeholder="Tulis nomer handphone kamu"
                    value={phoneNumber}
                    onChange={(e) => {
                      if(+e.target.value !== +e.target.value) {
                        return
                      }
                      setPhoneNumber(e.target.value)
                    }}
                  />
                  <label 
                    className="block mb-2 mt-2 animate__animated animate__fadeIn" 
                    htmlFor="bestPray"  
                  >
                    Ucapan dan Doa :
                  </label>
                  <textarea 
                    className="input-base p-2 shadow-md shadow-md animate__animated animate__fadeIn" 
                    type="text" 
                    name="bestPray"
                    placeholder="Tulis ucapan dan doa"
                    value={bestPray}
                    onChange={(e) => setBestPray(e.target.value)}
                  ></textarea>
                </>
              )}
              {(confirmSelected === 'NO' && confirmSelected) && (
                <>
                  <label 
                    className="block mb-2 mt-2 animate__animated animate__fadeIn" 
                    htmlFor="bestPray"  
                  >
                    Ucapan dan Doa :
                  </label>
                  <textarea 
                    className="input-base p-2 shadow-md shadow-md animate__animated animate__fadeIn" 
                    type="text" 
                    name="bestPray"
                    placeholder="Tulis ucapan dan doa"
                    value={bestPray}
                    onChange={(e) => setBestPray(e.target.value)}
                  ></textarea>
                </>
              )}
              <button 
                className={loadingForm ? "btn-gray w-full mt-3" : "btn-cyan w-full mt-3"} 
                type="button"
                onClick={onSubmitConfirmation}
                disabled={loadingForm}
              >
                {loadingForm ? "Loading..." : "KONFIRMASI"}
              </button>
            </>
          )}
          {((submitRSVP && confirmSelected !== 'NO') || userDataRSVP?.rsvpStatus === 'CONFIRM_ATTEND') && (
            <section className="animate__animated animate__fadeIn">
              <div className="shadow p-3 rounded bg-white flex flex-col items-center">
                <p>
                  Kepada Bapak/Ibu/Saudara/i,
                  <br/>
                  <span className="font-semibold">{userDataRSVP.name}</span>
                  <br />
                  <br />
                  Terima kasih telah mengkonfirmasi kehadiran anda di acara pernikahan kami.
                  <br/>
                  Dimohon untuk hadir sesuai dengan jam yang sudah ditentukan.
                  <br />
                  <br/>
                  Sampai jumpa!
                  <br />
                  Aliya & Arda
                </p>
                <img 
                  className="w-full mt-2 mb-2 border-maroon border-2" 
                  src={`https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${tamuID}`}
                />
                <p>Capture dan Tunjukkan QR Code ini kepada penerima tamu.</p>
              </div>
            </section>
          )}
          {((submitRSVP && confirmSelected === 'NO') || userDataRSVP?.rsvpStatus === 'NOT_CONFIRM') && (
            <section className="animate__animated animate__fadeIn">
              <div className="shadow p-3 rounded bg-white flex flex-col items-center">
                <p>
                  Kepada Bapak/Ibu/Saudara/i,
                  <br/>
                  <span className="font-semibold">{userDataRSVP.name}</span>
                  <br />
                  <br />
                  Terima kasih telah mengkonfirmasi kehadiran anda di acara pernikahan kami.
                  <br/>
                  <br />
                  Aliya & Arda
                </p>
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  )
}
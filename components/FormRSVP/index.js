import { useState, useEffect } from 'react'
import { db, analytics } from '../../firebase'
import { 
  calculateTimeLeft, 
  formValidation,
  createBestPrayList
} from '../../utils/customFunc'
import { 
  COLLECTION_RSVP, 
  DOC_INFO_DETAIL,
  COLLECTION_BEST_PRAY,
  initialForm
} from '../../utils/constant'
import TemplateConfirmation from '../TemplateConfirmation'

export default function FormRSVP({setBestPrayList, to, groupList}) {
  const [form, setForm] = useState(initialForm)
  const [formError, setFormError] = useState({})
  const [loadingForm, setLoadingForm] = useState(false)
  const [submitRSVP, setSubmitRSVP] = useState(false)
  const [timeLeft, setTimeLeft] = useState({})
  const [sessionAttend, setSessionAttend] = useState({})

  useEffect(() => {
    if(to) {
      setForm({...form, name: to })
    }
    // setTimeLeft(calculateTimeLeft())
  }, [])

  const handleFormInput = (e) => {
    const {name, value} = e.target

    // Check input number validation
    if(name === 'guest' || name === 'phoneNumber') {
      if(+value !== +value) {
        return
      }
    }
    setForm({
      ...form,
      [name]: value
    })
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()
    const errors = formValidation(form)

    if(Object.keys(errors).length !== 0) {
      setFormError(errors)
      analytics().logEvent('form_validation')
    } else {
      setFormError({})
      setLoadingForm(true)
      const dataForm = {
        ...form,
        guest: form.guest || 0,
        nameKey: form.name.toLowerCase().replace(/\s/g, ''),
        date: new Date(),
        userAgent: window.navigator.userAgent,
        rsvpStatus: form.attendanceConfirmation === "Y" ? "CONFIRM_ATTEND" : "NOT_ATTEND"
      }
      try {
        const response = await db.collection(COLLECTION_RSVP).add(dataForm)
        updateDetailInfo()

        // sendFeedback(form)
        if(form.group === groupList[0]) {
          setSessionAttend({
            sesi: "Sesi 1 :",
            time: "Pukul 13.00 - 15.00 WIB", 
            documentId: response.id
          })
        } else {
          setSessionAttend({
            sesi: "Sesi 2 :",
            time: "Pukul 16.00 - 18.00 WIB", 
            documentId: response.id
          })
        }
      } catch(error) {
        setLoadingForm(false)
        console.error("Error writing document: ", error)
      }
    }  
  }

  const updateDetailInfo = () => {
    const infoDetailRef = db.collection("infoDetail").doc(DOC_INFO_DETAIL)
    db.runTransaction((transaction) => {
      return transaction.get(infoDetailRef).then((infoDoc) => {
        let newInfoDetail = {
          invitationSent: infoDoc.data().invitationSent + 1,
          guestSum: infoDoc.data().guestSum + (parseInt(form.guest) || 0),
          guestSumCF: infoDoc.data().guestSumCF + (parseInt(form.guest) || 0),
          updatedAt: new Date()
        }
        transaction.update(infoDetailRef, newInfoDetail)
      })
    }).then(() => {
      if(form.bestPray) {
        createBestPrayList(form, setSubmitRSVP, setLoadingForm, setBestPrayList);
      } else {
        setSubmitRSVP(true)
        setLoadingForm(false)
      }
    }).catch((err) => {
      setLoadingForm(false)
      console.error(err);
    })
  }

  return (
    <section className="mt-8 max-w-xl mx-auto">
      <div className="heading-background">
        <h1>RESERVASI</h1>
        <h2>Aliya & Arda</h2>
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
      <div className="bg-brown-light rounded p-3 mt-10">
        {!submitRSVP && (
          <form onSubmit={onSubmitForm}>
            <label className="block mb-2 text-white" htmlFor="name">Nama Kamu *</label>
            <input 
              className="input-base p-2 shadow-md" 
              type="text" 
              name="name"
              placeholder="Tulis nama kamu"
              value={form.name}
              onChange={handleFormInput}
            />
            {formError.name && <small className="text-red-700">Nama kamu harus diisi ya</small>}
            <label className="block mb-2 mt-3 text-white" htmlFor="email">Nomer Handphone: *</label>
            <input 
              className="input-base p-2 shadow-md" 
              type="text" 
              name="phoneNumber"
              placeholder="Tulis nomer handphone kamu"
              value={form.phoneNumber}
              onChange={handleFormInput}
              inputMode="numeric"
            />
            {formError.phoneNumber && <small className="text-red-700">Nomer Handphone kamu harus diisi ya</small>}
            <label className="block mb-2 mt-3 text-white" htmlFor="guest">Konfirmasi Kehadiran: *</label>
            <select 
              className="p-2 input-base"
              name="attendanceConfirmation" 
              value={form.attendanceConfirmation}
              onChange={handleFormInput}
            >
              <option value={""} disabled>Konfirmasi Kehadiran</option>
              <option value={"Y"}>Hadir</option>
              <option value={"N"}>Berhalangan Hadir</option>
            </select>
            {formError.attendanceConfirmation && <small className="text-red-700">Konfirmasi kehadiran kamu harus diisi ya</small>}
            <label className="block mb-2 mt-3 text-white" htmlFor="email">Jumlah Tamu: </label>
            <input 
              className="input-base p-2 shadow-md" 
              type="text" 
              name="guest"
              placeholder="Konfirmasi jumlah tamu"
              value={form.guest}
              onChange={handleFormInput}
              inputMode="numeric"
            />
            {formError.guest && <small className="text-red-700">Jumlah Tamu kamu harus diisi ya</small>}
            {/* <label className="block mb-2 text-white mt-5" htmlFor="guest">Jumlah Tamu: *</label>
            <select 
              className="p-2 input-base"
              name="guest" 
              value={form.guest} 
              onChange={handleFormInput}
            >
              <option value={0} disabled>Konfirmasi jumlah tamu</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
            {formError.guest && <small className="text-red-700">Jumlah Tamu kamu harus diisi ya</small>} */}
            {/* <label className="block mb-2 text-white mt-5" htmlFor="guest">Group Kamu: *</label>
            <select 
              className="p-2 input-base"
              name="group" 
              value={form.group}
              onChange={handleFormInput}
            >
              <option value="" disabled>Konfirmasi Group kamu</option>
              {groupList.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            {formError.group && <small className="text-red-700">Group kamu harus diisi ya</small>} */}
            <label className="block mb-2 mt-3 text-white" htmlFor="bestPray">Ucapan dan Doa :</label>
            <textarea 
              className="input-base p-2 shadow-md" 
              type="text" 
              name="bestPray"
              placeholder="Tulis ucapan dan doa"
              value={form.bestPray}
              onChange={handleFormInput}
            ></textarea>
            <div className="mt-5">
              <button 
                className={loadingForm ? "btn-gray w-full" : "btn-tertiary w-full"} 
                type="submit"
                onClick={onSubmitForm}
                disabled={loadingForm}
              > 
                {loadingForm ? "Loading..." : "KONFIRMASI"}
              </button>
            </div>
          </form>
        )}
        
        {submitRSVP && (
          <TemplateConfirmation 
            form={form} 
            sessionAttend={sessionAttend} 
          />
        )}
      </div>
    </section>
  )
}
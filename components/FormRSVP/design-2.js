import { useState, useEffect } from 'react'
import { db, analytics } from '../../firebase'
import { 
  COLLECTION_RSVP, 
  DOC_INFO_DETAIL,
  COLLECTION_BEST_PRAY,
  initialForm
} from '../../utils/constant'
import { 
  formValidation, 
  createBestPrayList,
  calculateTimeLeft,
} from '../../utils/customFunc'
import TemplateConfirmation from '../TemplateConfirmation'
import Slide from 'react-reveal/Slide';

export default function FormRSVP2({setBestPrayList, to, groupList}) {
  const [form, setForm] = useState(initialForm)
  const [formError, setFormError] = useState({})
  const [loadingForm, setLoadingForm] = useState(false)
  const [submitRSVP, setSubmitRSVP] = useState(false)
  const [sessionAttend, setSessionAttend] = useState({})

  useEffect(() => {
    if(to) {
      setForm({...form, name: to })
    }   
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
        eventSession: form.group === groupList[0] || form.group === groupList[1] ? 1 : 2
        // rsvpStatus: form.attendanceConfirmation === "Y" ? "CONFIRM_ATTEND" : "NOT_ATTEND"
      }
      try {
        const response = await db.collection(COLLECTION_RSVP).add(dataForm)
        updateDetailInfo()

        // sendFeedback(form)
        if(form.group === groupList[0] || form.group === groupList[1]) {
          setSessionAttend({
            sesi: "Sesi 1 :",
            time: "Pukul 11.50 - 13.00 WIB", 
            documentId: response.id
          })
        } else {
          setSessionAttend({
            sesi: "Sesi 2 :",
            time: "Pukul 13.00 - 14.00 WIB", 
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
    <section className="max-w-2xl mx-auto">
      <div className="heading-background">
        <Slide left>
          <h1>RESERVASI</h1>
          <h2>Rifan & Olivia</h2>
          <p className="">Silahkan Konfirmasi Kehadiran di Bawah Ini</p>
        </Slide>
      </div>
      <div className="relative py-10 rounded px-6 mt-2 bg-primary">
        <div className="flower-bg"></div>
        <div className="transbox">
        {!submitRSVP && (
          <form onSubmit={onSubmitForm}>
            <label className="block mb-2" htmlFor="name">Nama: </label>
            <input 
              className="input-base p-2 shadow-md" 
              type="text" 
              name="name"
              placeholder="Tulis nama"
              value={form.name}
              onChange={handleFormInput}
            />
            {formError.name && <small className="text-red-700">Nama harus diisi ya</small>}
            <label className="block mb-2 mt-3" htmlFor="guest">Konfirmasi Kehadiran: *</label>
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
            <label className="block mb-2 mt-3" htmlFor="email">Nomor Handphone: </label>
            <input 
              className="input-base p-2 shadow-md" 
              type="text" 
              name="phoneNumber"
              placeholder="Tulis nomer handphone"
              value={form.phoneNumber}
              onChange={handleFormInput}
              inputMode="numeric"
            />
            {formError.phoneNumber && <small className="text-red-700">Nomer Handphone harus diisi ya</small>}
            {/* <label className="block mb-2 mt-3" htmlFor="email">Jumlah Tamu: *</label>
            <input 
              className="input-base p-2 shadow-md" 
              type="text" 
              name="guest"
              placeholder="Konfirmasi jumlah tamu"
              value={form.guest}
              onChange={handleFormInput}
              inputMode="numeric"
            />
            {formError.guest && <small className="text-red-700">Jumlah Tamu kamu harus diisi ya</small>} */}
            {/* <label className="block mb-2 mt-2" htmlFor="guest">Group: </label>
            <select 
              className="p-2 input-base"
              name="group" 
              value={form.group}
              onChange={handleFormInput}
              // defaultValue=""
            >
              <option value="" disabled>Konfirmasi Group</option>
              {groupList.map(item => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            {formError.group && <small className="text-red-700">Group kamu harus diisi ya</small>} */}
            <label className="block mb-2 mt-3" htmlFor="guest">Jumlah Tamu: </label>
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
            {formError.guest && <small className="text-red-700">Jumlah Tamu kamu harus diisi ya</small>}
            <label className="block mb-2 mt-3" htmlFor="bestPray">Ucapan dan Doa :</label>
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
                className={`font-desc ${loadingForm ? "btn-gray w-full" : "btn-primary w-full"}`} 
                type="submit"
                onClick={onSubmitForm}
                disabled={loadingForm}
                style={{backgroundColor: '#545454', color: '#fff'}}
              > 
                {loadingForm ? "Loading..." : "KIRIM UCAPAN"}
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
      </div>
    </section>
  )
}
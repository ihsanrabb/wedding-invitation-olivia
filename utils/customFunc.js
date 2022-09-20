import { db } from '../firebase'
import { 
  COLLECTION_BEST_PRAY, 
  COLLECTION_RSVP, 
  DOC_USER 
} from './constant'
import { WEDDING_DATE, COUPLE_NAME } from './constant'
import * as dayjs from 'dayjs'

export const calculateTimeLeft = () => {
  const total = dayjs('2022-10-22T10:30:00') - dayjs();
  const seconds = Math.floor( (total/1000) % 60 );
  const minutes = Math.floor( (total/1000/60) % 60 );
  const hours = Math.floor( (total/(1000*60*60)) % 24 );
  const days = Math.floor( total/(1000*60*60*24) );

  const addLeadingZero = (target) => {
    if(target < 10) {
      return '0' + target.toString();
    }

    return target.toString();
  }

  return {
    total,
    days: addLeadingZero(days),
    hours: addLeadingZero(hours),
    minutes: addLeadingZero(minutes),
    seconds: addLeadingZero(seconds),
  };
}

export const getSessionAttendance = (sesi) => {
  if(sesi === 1) {
    return {
      sesi: "Sesi 1 :",
      time: "Pukul 13.00 - 15.00 WIB"
    }
  } else if (sesi === 2) {
    return {
      sesi: "Sesi 2 :",
      time: "Pukul 16.00 - 18.00 WIB"
    }
  }

  return undefined
}

export const formValidation = (form) => {
  let errors = {}
  if(!form.name) {
    errors = {
      ...errors,
      name: true
    }
  }
  if(form.attendanceConfirmation === "") {
    errors = {
      ...errors,
      attendanceConfirmation: true
    }
  }
  if(form.attendanceConfirmation === "Y") {
    if(!form.phoneNumber) {
      errors = {
        ...errors,
        phoneNumber: true
      }
    }
    if(!form.guest) {
      errors = {
        ...errors,
        guest: true
      }
    }
    // if(!form.group) {
    //   errors = {
    //     ...errors,
    //     group: true
    //   }
    // }
  }

  return errors
}

export const initDataBestPray = async () => {
  try {
    const response = await db.collection(COLLECTION_BEST_PRAY)
      .where("ownedBy", "==" , `${COUPLE_NAME}`)
      .orderBy("date", "desc")
      .limit(3)
      .get();

    let listPray = []
    response.forEach(function(doc) {
      listPray.push({
        id:doc.id,
        data:doc.data()
      })
    })
    return listPray
  } catch(error) {
    console.error("Error get document: ", error)
  }
}

export const getDetailRSVP = async (dispatch, tamu) => {
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

export const initDataDetailUser = async (setGroupList, setStreamingList, dispatch) => {
  try {
    const response = await db.collection("users").doc(DOC_USER).get()
    if(response.exists) {
      setGroupList(response.data().groupList)
      if(response.data().streamingList) {
        setStreamingList(response.data().streamingList)
      }
      if(response.data().galleryImages) {
        dispatch({type: 'SET_DETAIL_USER', payload: {
          galleryImages: response.data().galleryImages
        }})
      }
    }
  } catch(error) {
    console.error('error get data user detail', error)
  }
}

export const createBestPrayList = async (form, setSubmitRSVP, setLoadingForm, setBestPrayList) => {
  const data = {
    date: new Date(),
    name: form.name,
    bestPray: form.bestPray,
    group: form.group,
    ownedBy: `${COUPLE_NAME}`
  }
  setLoadingForm(true)
  try {
    await db.collection(COLLECTION_BEST_PRAY).add(data)
    setSubmitRSVP(true)
    setLoadingForm(false)
    const responseBestPray = await initDataBestPray()
    setBestPrayList(responseBestPray)
  } catch(error) {
    setLoadingForm(false)
    console.error("Error writing Best Pray List: ", error)
  }
}

// emailjs.init("user_HmH4F8oZm7E0Hf6JYG3UE")
// const sendFeedback = (variables) => {
//   const serviceID = 'service_fdpbq2p';
//   const templateId = 'template_1kwlzc7';

//   emailjs.send(
//     serviceID, 
//     templateId,
//     variables
//   ).then(res => {
//     console.log('Email successfully sent!', res)
//   })
//   .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
// }
export const COLLECTION_RSVP = `${process.env.COLLECTION_RSVP}`
export const COLLECTION_BEST_PRAY = `${process.env.COLLECTION_BEST_PRAY}`
export const DOC_INFO_DETAIL = `${process.env.DOC_INFO_DETAIL}`
export const DOC_USER = `${process.env.DOC_USER}`
export const WEDDING_DATE = `${process.env.WEDDING_DATE}`
export const COUPLE_NAME = `${process.env.COUPLE_NAME}`

export const optionsLightbox = {
  buttons: {
    showAutoplayButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showThumbnailsButton: false,
    showNextButton: true,
    showPrevButton: true
  },
  caption: {
    captionColor: "#fff",
    captionFontSize: "20px"
  },
  settings: {
    overlayColor: "rgba(201,197,186, .9)",
  },
  thumbnails: {
    thumbnailsAlignment: "center"
  }
}

export const initialForm = {
  name: "",
  nameKey: "",
  phoneNumber: "",
  guest: 0,
  group: "",
  bestPray: "",
  isAttend: false,
  date: null,
  status_reminder: "NOT_SENT",
  userAgent: "",
  channel: "CF",
  tableNumber: "",
  attendanceConfirmation: "Y",
  rsvpStatus: "CONFIRM_ATTEND",
  ownedBy: `${COUPLE_NAME}`
}
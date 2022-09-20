import { 
  createContext, 
  useReducer, 
  useContext 
} from 'react'

export const WeddingContext  = createContext()

const initialState = {
  pending: false,
  userDataRSVP: null,
  detailUser: {
    galleryImages: []
  }
}

function weddingReducer(state, action) {
  switch (action.type) {
    case 'SET_PENDING': {
      return {
        ...state,
        pending: action.payload
      }
    }
    case 'SET_USER_DATA_RSVP': {
      return {
        ...state,
        userDataRSVP: {
          name: action.payload.name,
          eventSession: action.payload.eventSession ?? null,
          rsvpStatus: action.payload.rsvpStatus ?? ""
        }
      }
    }
    case 'SET_DETAIL_USER': {
      return {
        ...state,
        detailUser: {
          galleryImages: action.payload.galleryImages ?? []
        }
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function WeddingProvider({ children }) {
  const [globalState, dispatch] = useReducer(weddingReducer, initialState)
  const value = {globalState, dispatch}

  return (
    <WeddingContext.Provider value={value}>{children}</WeddingContext.Provider>
  )
}

function useWeddingContext() {
  const context = useContext(WeddingContext)
  if (context === undefined) {
    throw new Error('useDashboardContext must be used within a DashboardProvider')
  }
  return context
}

export {
  WeddingProvider,
  useWeddingContext
}
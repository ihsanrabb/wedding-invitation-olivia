import {analytics} from '../firebase'

export const logEvent = (url) => {
  analytics().setCurrentScreen(url)
  analytics().logEvent('screen_view_ucapan')
}
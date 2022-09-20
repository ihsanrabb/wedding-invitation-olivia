import { useEffect, useState } from 'react'

export default function AudioPlayer({controlFromParent, isPlaying}) {
  const [audioIsPlay, setAudioIsPlay] = useState(false)
  
  useEffect(() => {
    initPlayAudio()
    const audio = document.getElementById("audio-element")
    return () => audio.pause()
  }, [])

  useEffect(() => {
    if(controlFromParent) {
      const audio = document.getElementById("audio-element")

      if(isPlaying) {
        audio.play()
        setAudioIsPlay(true)
      } else {
        audio.pause()
        setAudioIsPlay(false)
      }
    }
  }, [isPlaying])

  const initPlayAudio = () => {
    const audio = document.getElementById("audio-element")
    let promise = audio.play()

    if(promise !== undefined) {
      promise.then(() => {
        setAudioIsPlay(true)
      }).catch(error => {
        console.log('ke blogh', error)
        audio.muted = true
      })
    }
  }

  const playAudio = () => {
    const audio = document.getElementById("audio-element")
    if(audioIsPlay !== true) {
      audio.play()
      setAudioIsPlay(true)
    } else {
      audio.pause()
      setAudioIsPlay(false)
    }
  }

  return (
    <>
      <audio id="audio-element" loop>
        <source src="/olivia-music.mp3" type="audio/mpeg"></source>
      </audio>
      <div className="btn-player" onClick={playAudio}>
        {audioIsPlay ? (
          <img src="/images/icon/pause-btn.svg" alt="pause icon" />
        ) : (
          <img src="/images/icon/play-btn.svg" alt="play icon" />
        )}
      </div>
    </>
  )
}
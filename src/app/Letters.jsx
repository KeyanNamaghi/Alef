'use client'
import { useEffect } from 'react'
import Snap from 'snapsvg-cjs'
import {
  Alef,
  Be,
  Pe,
  Te,
  Se,
  Jim,
  Che,
  He,
  Khe,
  Dal,
  Zal,
  Re,
  Ze,
  Zhe,
  Sin,
  Shin,
  Sad,
  Zad,
  Ta,
  Za,
  Ain,
  Ghain,
  Fe,
  Qaf,
  Kaf,
  Gaf,
  Lam,
  Mim,
  Nun,
  Vav,
  H,
  Ye,
} from './Alphabet'

export const Letters = () => {
  useEffect(() => {
    const circle = Snap.select('#dot')
    const circlePoints = circle.node.getAttribute('d')
    const alefPoints = Snap('#alef').node.getAttribute('d')
    const bePoints = Snap('#be').node.getAttribute('d')
    const pePoints = Snap('#pe').node.getAttribute('d')
    const tePoints = Snap('#te').node.getAttribute('d')
    const sePoints = Snap('#se').node.getAttribute('d')
    const jimPoints = Snap('#jim').node.getAttribute('d')
    const chePoints = Snap('#che').node.getAttribute('d')
    const hePoints = Snap('#he').node.getAttribute('d')
    const khePoints = Snap('#khe').node.getAttribute('d')
    const dalPoints = Snap('#dal').node.getAttribute('d')
    const zalPoints = Snap('#zal').node.getAttribute('d')
    const rePoints = Snap('#re').node.getAttribute('d')
    const zePoints = Snap('#ze').node.getAttribute('d')
    const zhePoints = Snap('#zhe').node.getAttribute('d')
    const sinPoints = Snap('#sin').node.getAttribute('d')
    const shinPoints = Snap('#shin').node.getAttribute('d')
    const sadPoints = Snap('#sad').node.getAttribute('d')
    const zadPoints = Snap('#zad').node.getAttribute('d')
    const taPoints = Snap('#ta').node.getAttribute('d')
    const zaPoints = Snap('#za').node.getAttribute('d')
    const ainPoints = Snap('#ain').node.getAttribute('d')
    const ghainPoints = Snap('#ghain').node.getAttribute('d')
    const fePoints = Snap('#fe').node.getAttribute('d')
    const qafPoints = Snap('#qaf').node.getAttribute('d')
    const kafPoints = Snap('#kaf').node.getAttribute('d')
    const gafPoints = Snap('#gaf').node.getAttribute('d')
    const lamPoints = Snap('#lam').node.getAttribute('d')
    const mimPoints = Snap('#mim').node.getAttribute('d')
    const nunPoints = Snap('#nun').node.getAttribute('d')
    const vavPoints = Snap('#vav').node.getAttribute('d')
    const hPoints = Snap('#h').node.getAttribute('d')
    const yePoints = Snap('#ye').node.getAttribute('d')

    const updateLetter = (points) => {
      circle.animate({ d: points }, 200, mina.v, () => {
        // circle.animate({ d: circlePoints }, 500, mina.backout)
        console.log('done')
        circle.attr({ d: points })
      })
      // circle.stop()
    }

    // loop through letters
    const letters = [
      alefPoints,
      bePoints,
      pePoints,
      tePoints,
      sePoints,
      hePoints,
      jimPoints,
      chePoints,
      khePoints,
      dalPoints,
      zalPoints,
      rePoints,
      zePoints,
      zhePoints,
      sinPoints,
      shinPoints,
      sadPoints,
      zadPoints,
      taPoints,
      zaPoints,
      ainPoints,
      ghainPoints,
      fePoints,
      qafPoints,
      kafPoints,
      gafPoints,
      lamPoints,
      mimPoints,
      nunPoints,
      vavPoints,
      hPoints,
      yePoints,
    ]
    let i = 0
    setInterval(() => {
      updateLetter(letters[i])
      // setTimeout(() => updateLetter(circlePoints), 100)
      i++
      if (i === letters.length) {
        i = 0
      }
    }, 1000)

    // listen for key presses

    const keyPress = (e) => {
      switch (e.key) {
        case 'a':
          updateLetter(alefPoints)
          break
        case 'b':
          updateLetter(bePoints)
          break
        case 'p':
          updateLetter(pePoints)
          break
        case 't':
          updateLetter(tePoints)
          break
        case 's':
          updateLetter(sePoints)
          break
        case 'j':
          updateLetter(jimPoints)
          break
        case 'ch':
          updateLetter(chePoints)
          break
        case 'h':
          updateLetter(hePoints)
          break
        case 'kh':
          updateLetter(khePoints)
          break
        case 'd':
          updateLetter(dalPoints)
          break
        case 'z':
          updateLetter(zalPoints)
          break
        case 'r':
          updateLetter(rePoints)
          break
        case 'z':
          updateLetter(zePoints)
          break
        case 'zh':
          updateLetter(zhePoints)
          break
        case 's':
          updateLetter(sinPoints)
          break
        case 'sh':
          updateLetter(shinPoints)
          break
        case 's':
          updateLetter(sadPoints)
          break
        case 'z':
          updateLetter(zadPoints)
          break
        case 't':
          updateLetter(taPoints)
          break
        case 'z':
          updateLetter(zaPoints)
          break
        case 'a':
          updateLetter(ainPoints)
          break
        case 'gh':
          updateLetter(ghainPoints)
          break
        case 'f':
          updateLetter(fePoints)
          break
        case 'q':
          updateLetter(qafPoints)
          break
        case 'k':
          updateLetter(kafPoints)
          break
        case 'g':
          updateLetter(gafPoints)
          break
        case 'l':
          updateLetter(lamPoints)
          break
        case 'm':
          updateLetter(mimPoints)
          break
        case 'n':
          updateLetter(nunPoints)
          break
        case 'v':
          updateLetter(vavPoints)
          break
        case 'h':
          updateLetter(hPoints)
          break
        case 'y':
          updateLetter(yePoints)
          break
        default:
          break
      }
    }

    window.addEventListener('keypress', keyPress)
  }, [])

  return (
    <svg id='cups' width='400' height='400' viewBox='-100 0 300 100' xmlns='http://www.w3.org/2000/svg' fill='#E2E8EF'>
      <path id='dot' d='m 0 0 l 0 0' />

      <Alef />
      <Be />
      <Pe />
      <Te />
      <Se />
      <Jim />
      <Che />
      <He />
      <Khe />
      <Dal />
      <Zal />
      <Re />
      <Ze />
      <Zhe />
      <Sin />
      <Shin />
      <Sad />
      <Zad />
      <Ta />
      <Za />
      <Ain />
      <Ghain />
      <Fe />
      <Qaf />
      <Kaf />
      <Gaf />
      <Lam />
      <Mim />
      <Nun />
      <Vav />
      <H />
      <Ye />
    </svg>
  )
}

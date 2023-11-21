// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const ScrollView = memo((props) => {
  const [showRight,setShowRight] = useState(false)
  const [showLeft,setShowLeft] = useState(false)
  const [positionIndex,setIndex] = useState(0)

  const distanceRef = useRef()
  const slotRef = useRef()

  useEffect(() => {
    const scrollWidth = slotRef.current.scrollWidth //一共可以滚动的宽度
    const clientWidth = slotRef.current.clientWidth //本身占据的宽度
    const distance = scrollWidth - clientWidth
    distanceRef.current = distance
    setShowRight(distance > 0)
  },[props.children])

  function controlClickHandle(isRight = true){
    const newIndex = isRight ? positionIndex + 1 : positionIndex - 1
    const newEl = slotRef.current.children[newIndex]
    slotRef.current.style.transform = `translate(-${newEl.offsetLeft}px)`
    setIndex(newIndex)
    setShowRight(distanceRef.current > newEl.offsetLeft)
    setShowLeft(newEl.offsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeft && 
        <div className='controls left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft/>
        </div>}
      {showRight && 
        <div className='controls right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight/>
        </div>}
      <div className="scroll">
        <div className="slot" ref={slotRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView
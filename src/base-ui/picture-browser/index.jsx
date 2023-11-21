import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import { CSSTransition,SwitchTransition } from 'react-transition-group';
import classNames from 'classnames';
import Indicator from '@/base-ui/indicator/index.jsx';

import IconClose from '@/assets/svg/icon-close';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom';
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top';


const PictureBrowser = memo((props) => {
  const { pictureUrls,closeClick } = props
  const [ currentIndex,setIndex ] = useState(0)
  const [ isRight,setRight ] = useState(true)
  const [ isShow,setShowList ] = useState(true)
  
  //当图片浏览器显示出来时，滚动条功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  },[])

  function closeClickHandle(){
    closeClick()
  }

  function controlClickHandle(isRight = true){
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1
    if(newIndex < 0) newIndex = pictureUrls.length - 1
    if(newIndex > pictureUrls.length - 1) newIndex = 0
    setIndex(newIndex)
    setRight(isRight)
  }

  function bottomItemClickHandle(index){
    setRight(index > currentIndex)
    setIndex(index)
  }

  return (
    <BrowserWrapper isRight={isRight} showList={isShow}>
      <div className="top">
        <div className="close-btn" onClick={closeClickHandle}>
          <IconClose/>
        </div>
      </div>
      <div className="slider">
        <div className="control">
          <div className="btn left" onClick={e => controlClickHandle(false)}>
            <IconArrowLeft width='77' height='77'/>
          </div>
          <div className="btn right" onClick={e => controlClickHandle(true)}>
            <IconArrowRight width='77' height='77'/>
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode='in-out'>
            <CSSTransition key={pictureUrls[currentIndex]} classNames='pic' timeout={200}>
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{currentIndex + 1}/{pictureUrls.length}</span>
              <span>room apartment图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={e => setShowList(!isShow)}>
              <span>{isShow ? '隐藏':'显示'}照片列表</span>
              {isShow ? <IconTriangleArrowBottom/> : <IconTriangleArrowTop/>}
            </div>
          </div>
          <div className="list">
            <Indicator selectIndex={currentIndex}>
              {
                pictureUrls.map((item,index) => {
                  return (
                    <div 
                        className={classNames('item',{active:currentIndex === index})} 
                        key={item}
                        onClick={e => bottomItemClickHandle(index)}
                        >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls:PropTypes.array
}

export default PictureBrowser
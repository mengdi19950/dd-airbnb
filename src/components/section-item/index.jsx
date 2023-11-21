import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { ItemWrapper } from './style'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const SectionItem = memo((props) => {
  const { itemData,itemWidth = "25%",itemClick } = props
  const [selectIndex,setIndex] = useState(0)
  const sliderRef = useRef()

  function arrowClickHandle(isRight = true,e){
    isRight ? sliderRef.current.next() : sliderRef.current.prev()
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    if(newIndex < 0)  newIndex = itemData.picture_urls.length - 1
    if(newIndex > itemData.picture_urls.length - 1)  newIndex = 0
    setIndex(newIndex)

    //阻止冒泡 点击entire页面小图上的轮播按钮时，不要进入详情页
    e.stopPropagation()
  }

  function itemClickHandle(){
    // console.log(itemData);
    if(itemClick) itemClick()
  }

  const pictureCover = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>)
  const sliderCover = (
    <div className="slider">
          <div className="control">
            <div className="btn left" onClick={e => arrowClickHandle(false,e)}>
              <IconArrowLeft width="30" height='30'/>
            </div>
            <div className="btn right" onClick={e => arrowClickHandle(true,e)}>
              <IconArrowRight width="30" height='30'/>
            </div>
          </div>
          <div className="indicator">
            <Indicator selectIndex={selectIndex}>
              {
                itemData?.picture_urls?.map((item,index) => {
                  return (
                    <div className="item" key={index}>
                      <span className={classNames('dot',{active:selectIndex === index})}></span>
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
          <Carousel dots={false} ref={sliderRef}>
            {
              itemData?.picture_urls?.map(item => {
                return (
                  <div className="cover" key={item}>
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
        </div>
  )

  return (
    <ItemWrapper verifycolor={itemData.verify_info.text_color || '#39576a'}    itemWidth={itemWidth}
    onClick={e => itemClickHandle(itemData)}>
      <div className="inner">
        { !itemData.picture_urls ? pictureCover : sliderCover }
        {/* <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="slider">
          <div className="control">
            <div className="btn left" onClick={e => arrowClickHandle(false)}>
              <IconArrowLeft width="30" height='30'/>
            </div>
            <div className="btn right" onClick={arrowClickHandle}>
              <IconArrowRight width="30" height='30'/>
            </div>
          </div>
          <div className="indicator">
            <Indicator selectIndex={selectIndex}>
              {
                itemData?.picture_urls?.map((item,index) => {
                  return (
                    <div className="item" key={index}>
                      <span className={classNames('dot',{active:selectIndex === index})}></span>
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
          <Carousel dots={false} ref={sliderRef}>
            {
              itemData?.picture_urls?.map(item => {
                return (
                  <div className="cover" key={item}>
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
        </div> */}
        <div className="desc">
          {itemData.verify_info.messages.join(' · ')}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating value={itemData.star_rating ?? 4.5} precision={0.1} readOnly sx={{color:'#39576a',fontSize:'12px'}}/>
          <span className="count">{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className="dot">·</span>
          }
          {
            itemData.bottom_info && <span className="extra">{itemData.bottom_info.content}</span>
          }
        </div>
        
        
      </div>
    </ItemWrapper>
  )
})

SectionItem.propTypes = {
  itemData:PropTypes.object
}

export default SectionItem
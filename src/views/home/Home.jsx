import React, { memo,useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeBanner from './cpns/home-banner'
import { HomeWrapper } from './style';
import { fetchHomeDataAction } from '@/store/modules/home';
import HomeSectionV1 from './cpns/home-section-v1';
import HomeSectionV2 from './cpns/home-section-v2';
import LongforSection from './cpns/home-longfor';
import HomeSectionV3 from './cpns/home-section-v3';
import { changeHeaderConfigAction } from '@/store/modules/main';


const Home = memo(() => {
  const { goodPriceInfo,highscoreInfo,discountInfo,recommendInfo,longforInfo,plusInfo } = useSelector((state) => ({
    goodPriceInfo:state.home.goodPriceInfo,
    highscoreInfo:state.home.highscoreInfo,
    discountInfo:state.home.discountInfo,
    recommendInfo:state.home.recommendInfo,
    longforInfo:state.home.longforInfo,
    plusInfo:state.home.plusInfo
  }),shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({ isFixed:true,topAlpha:true }))
  },[dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
       {Object.keys(discountInfo).length && <HomeSectionV2 sectionData={discountInfo}/>}
       {Object.keys(recommendInfo).length && <HomeSectionV2 sectionData={recommendInfo}/>}
       {Object.keys(longforInfo).length && <LongforSection infoData={longforInfo}/>}
       {Object.keys(goodPriceInfo).length && <HomeSectionV1 sectionData={goodPriceInfo}/>}
       {Object.keys(highscoreInfo).length && <HomeSectionV1 sectionData={highscoreInfo}/>}
       {Object.keys(plusInfo).length  &&   <HomeSectionV3 sectionData={plusInfo}/>}
       
       
      </div>
    </HomeWrapper>
  )
})

export default Home
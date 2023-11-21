import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { DetailWrapper } from './style'
import DetailPictures from './cpns/detail-pictures'
import DetailInfos from './cpns/detail-infos'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo:state.detail.detailInfo
  }),shallowEqual)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed:false,topAlpha:false }))
  })

  return (
    <DetailWrapper>
      <DetailPictures detailData={detailInfo}/>
      <DetailInfos/>
    </DetailWrapper>
  )
})

export default Detail
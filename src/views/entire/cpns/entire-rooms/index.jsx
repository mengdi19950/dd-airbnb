import React, { memo, useCallback} from 'react'
import {RoomWrapper} from './style';
import { shallowEqual,useDispatch,useSelector } from 'react-redux';
import SectionItem from '@/components/section-item';
import { useNavigate } from 'react-router-dom';
import { changeDetailInfoAction } from '@/store/modules/detail';

const EntireRooms = memo(() => {
  //从redux中获取roomlist数据
  const { roomList,totalCount,isLoading } = useSelector((state) => ({
    roomList:state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading:state.entire.isLoading
  }),shallowEqual)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const itemClickHandle = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
  },[dispatch,navigate])

  return (
    <RoomWrapper>
      <h2 className='title'>共{totalCount}多处住所</h2>
      <div className="list">
        {
          roomList.map(item => {
            return (
              <SectionItem itemData={item} itemWidth='20%' key={item._id} itemClick={e => itemClickHandle(item)}/>
            )
          })
        }
      </div>
      {
        isLoading && <div className="cover"/>
      }
    </RoomWrapper>
  )
})

export default EntireRooms
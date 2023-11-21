import React, { memo } from 'react'
import { PagnitionWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { useSelector,useDispatch, shallowEqual } from 'react-redux';
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators';

const EntirePagination = memo(() => {
  const { totalCount,currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }),shallowEqual)

  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  const dispatch = useDispatch()
  
  function pageChangeHandle(e,pageCount){
    //滚动到顶部
    window.scrollTo(0, 0)
    //翻页
    dispatch(fetchRoomListAction(pageCount - 1))
  }
  return (
    <PagnitionWrapper>
      {
        !!roomList.length && (
        <div className="info">
          <Pagination count={Math.ceil(totalCount/20)} onChange={pageChangeHandle}/>
          <div className="desc">
            第 {startCount} - {endCount} 个房源, 共超过 {totalCount} 个
          </div>
        </div>
        )
      }
    </PagnitionWrapper>
  )
})


export default EntirePagination
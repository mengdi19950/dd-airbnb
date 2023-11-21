import React, { memo, useRef, useState } from 'react'
import { HeaderWrapper, SearchAreaWrapper } from './style'
import HeaderLeft from './cpns/header-left'
import HeaderCenter from './cpns/header-center'
import HeaderRight from './cpns/header-right'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  //redux中获取fixed数据
  const { headerConfig } = useSelector((state) => ({
    headerConfig:state.main.headerConfig
  }),shallowEqual)
  const { isFixed,topAlpha } = headerConfig
  //记录当前是否是搜索状态
  const [ isSearch,setSearch ] = useState(false)

  const { scrollY } = useScrollPosition()
  const prevY = useRef(0)

  if(!isSearch) {
    prevY.current = scrollY
  } else if(isSearch && Math.abs(scrollY - prevY.current) > 30) {
    //弹出搜索框的情况下，滚动的距离大于之前记录的距离的30
    setSearch(false)
  }

  const isAlpha = topAlpha && scrollY === 0
  

  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper isAlpha={isAlpha} className={classNames({ fixed:isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft/>
            <HeaderCenter isSearch={isAlpha || isSearch} searchBarClick={e => setSearch(true)}/>
            <HeaderRight/>
          </div>
          {/* <div className="search-area"></div> */}
          <SearchAreaWrapper isSearch={isAlpha || isSearch}/>
        </div>
        { isSearch && <div className="cover" onClick={e => setSearch(false)}></div> }
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader
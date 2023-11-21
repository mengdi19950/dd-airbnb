import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconMenu from '@/assets/svg/icon-menu'
import IconAvatar from '@/assets/svg/icon-avatar'

const HeaderRight = memo(() => {

  const [showPanel,setShowPanel] = useState(false)
  //监听 window 点击
  useEffect(() => {
    function windowHandleClick(){
      setShowPanel(false)
    }
    window.addEventListener('click',windowHandleClick,true)

    return () => {
      window.removeEventListener('click',windowHandleClick)
    }
  },[])


  return (
    <RightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span><IconGlobal/></span>
      </div>
      <div className="profile" onClick={e => setShowPanel(!showPanel)}>
        <span className='menu'><IconMenu/></span>
        <span className='avatar'><IconAvatar/></span>

        { showPanel && 
          (
            <div className="panel">
              <div className="top">
                <div className="item">注册</div>
                <div className="item">登录</div>
              </div>
              <div className="bottom">
                <div className="item">出租房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }
      </div>
      

    </RightWrapper>
  )
})

export default HeaderRight
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { PictureWrapper } from './style'
import PictureBrowser from '@/base-ui/picture-browser'

const DetailPictures = memo((props) => {
  const { detailData } = props
  const [showBrowser,setBrowser] = useState(false)
  
  return (
    <PictureWrapper>
      <div className="picture">
        <div className="left">
          <div className="item" onClick={e => setBrowser(true)}>
            <img src={detailData?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            detailData?.picture_urls?.slice(1,5).map(item => {
              return (
                <div className="item" key={item} onClick={e => setBrowser(true)}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="show-btn">
        <button className='btn' onClick={e => setBrowser(true)}>显示照片</button>
      </div>
      { showBrowser && <PictureBrowser pictureUrls={detailData?.picture_urls} closeClick={e => setBrowser(false)}/> }
    </PictureWrapper>
  )
})

DetailPictures.propTypes = {
  detailData:PropTypes.object
}

export default DetailPictures
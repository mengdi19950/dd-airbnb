import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionItem from '@/components/section-item';
import { ListWrapper } from './style';

const SectionList = memo((props) => {
  const {listData = [],itemWidth} = props
  return (
    <ListWrapper>
      {
        listData?.slice(0,8).map(item => {
          return <SectionItem itemData={item} itemWidth={itemWidth} key={item.id}/>
        })
      }
    </ListWrapper>
  )
})

SectionList.propTypes = {
  listData:PropTypes.array
}

export default SectionList
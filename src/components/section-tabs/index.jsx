import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'
import classNames from 'classnames';
import ScrollView from '@/base-ui/scroll-view';

const SectionTabs = memo((props) => {
  const {tabNames = [],tabClick} = props
  const [currentIndex,setIndex] = useState(0)
  function itemClickHandle(index,item){
   setIndex(index)
   tabClick(item)
  }
  return (
    <TabsWrapper>
      <ScrollView>
       {
          tabNames.map((item,index) => {
            return (
              <div key={index} 
                  className={classNames('item',{active:index === currentIndex})}
                  onClick={e => itemClickHandle(index,item)}>
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames:PropTypes.array
}

export default SectionTabs
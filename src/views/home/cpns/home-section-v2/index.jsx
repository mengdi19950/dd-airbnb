import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header';
import SectionList from '@/components/section-list';
import SectionTabs from '@/components/section-tabs';
import SectionFooter from '@/components/section-footer';

const HomeSectionV2 = memo((props) => {
  const { sectionData } = props

  const initialName = Object.keys(sectionData.dest_list)[0]
  const [name,setName] = useState(initialName)
  const tabNames = sectionData.dest_address?.map(item => item.name)

  const tabClickHandle = useCallback((item) => {
    setName(item)
  },[])

  return (
    <SectionV2Wrapper>
      <div className="discount">
        <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle}/>
        <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
        <SectionList listData={sectionData.dest_list?.[name]} itemWidth="33.33333%"/>
        <SectionFooter name={name}/>
      </div>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  sectionData:PropTypes.object
}

export default HomeSectionV2
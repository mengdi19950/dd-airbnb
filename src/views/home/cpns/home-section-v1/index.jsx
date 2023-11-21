import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header';
import SectionList from '@/components/section-list';
import SectionFooter from '@/components/section-footer';

const HomeSectionV1 = memo((props) => {
  const { sectionData } = props
  return (
    <SectionV1Wrapper>
       <div className="section">
          <SectionHeader title={sectionData.title}/>
          <SectionList listData={sectionData.list} itemWidth="25%"/>
          <SectionFooter/>
        </div>
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  sectionData:PropTypes.object
}

export default HomeSectionV1
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header';
import SectionItem from '@/components/section-item';
import SectionFooter from '@/components/section-footer';
import ScrollView from '@/base-ui/scroll-view';

const HomeSectionV3 = memo((props) => {
  const { sectionData } = props
  return (
    <SectionV3Wrapper>
      <SectionHeader title={sectionData.title} subtitle={sectionData.subtitle}/>
      <div className="section-list">
        <ScrollView>
          {
            sectionData.list.map(item => {
              return <SectionItem itemData={item} itemWidth='20%' key={item.id}/>
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name={sectionData.type}/>
    </SectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  sectionData:PropTypes.object
}

export default HomeSectionV3
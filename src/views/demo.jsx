import React, { memo, useState } from 'react'
import Indicator from '../base-ui/indicator'
import { DemoWrapper } from './style'

const Demo = memo(() => {
  const names = ['aaa','bbb','ccc','ddd','eee']
  const [selectIndex,setIndex] = useState(0)
  function toggleClick(isNext=true){
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if(newIndex < 0)  newIndex = names.length - 1
    if(newIndex > names.length - 1)  newIndex = 0
    setIndex(newIndex)
  }
  return (
    <DemoWrapper>
      <div>
        <button onClick={e => toggleClick(false)}>prev</button>
        <button onClick={e => toggleClick(true)}>next</button>
        <div className="list">
          <Indicator selectIndex={selectIndex}>
              {
                names.map((item,index) => {
                  return <button key={item}>{item}</button>
                })
              }
          </Indicator>
        </div>
      </div>
    </DemoWrapper>
  )
})

export default Demo
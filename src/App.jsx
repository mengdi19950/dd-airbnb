import React, { Suspense, memo } from 'react'
import { useRoutes } from 'react-router-dom';
import routes from './router';
import AppHeader from './components/app-header';
import AppFooter from './components/app-footer';
import useScrollToTop from './hooks/useScrollToTop';


const App = memo(() => {

  // const location = useLocation()
  // useEffect(() => {
  //   window.scrollTo(0,0)
  // },[location.pathname])
  useScrollToTop()
  return (
    <div className='app'>
      <AppHeader/>
      <Suspense fallback="loading">
        <div className="page">
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter/>
    </div>
  )
})

export default App
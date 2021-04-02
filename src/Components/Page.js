import { useRef } from 'react'
import { Route } from 'react-router'
import { CSSTransition } from 'react-transition-group'
import Footer from './Footer'

const Page = ({ path, children }) => {
  const transitionRef = useRef(null)
  return (
    <Route path={path}>
      {({ match }) => (
        <CSSTransition in={!!match} unmountOnExit classNames='fade' nodeRef={transitionRef} timeout={300}>
          <div className='page' ref={transitionRef}>
            <div className='content'>
              {children}
            </div>
            <Footer />
          </div>
        </CSSTransition>
      )}
    </Route>
  )
}

export default Page

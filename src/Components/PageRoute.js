import { useRef } from 'react'
import { Route } from 'react-router'
import { CSSTransition } from 'react-transition-group'
import Footer from './Footer'

const PageRoute = ({ children, ...props }) => {
  const transitionRef = useRef(null)
  return (
    <Route {...props}>
      {({ match }) => (
        <CSSTransition in={!!match} unmountOnExit classNames='fade' nodeRef={transitionRef} timeout={600}>
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

export default PageRoute

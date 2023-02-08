import { Suspense, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import { CSSTransition } from "react-transition-group";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  const { pathname } = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header />
      <div className="min-h-0 w-full grow overflow-y-auto overflow-x-hidden p-6 md:space-y-8 md:p-8">
        <CSSTransition
          nodeRef={containerRef}
          key={pathname}
          timeout={300}
          appear
          in
          classNames={{
            appear: "opacity-0",
            appearActive: "opacity-100 transition-opacity duration-300",
          }}
        >
          <div
            ref={containerRef}
            className="mx-auto flex min-h-full w-full max-w-5xl flex-col items-center space-y-6"
          >
            <Suspense
              fallback={
                <div className="!my-auto h-12 w-12 animate-spin rounded-full border-l-2 border-t-2 border-cyan-500" />
              }
            >
              <Outlet />
            </Suspense>
            <div className="!mt-auto" />
            <Footer />
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export default App;

import { NavbarDemo } from "@/Layout";
import { ROUTE_PATH } from "@/lib/route-path";
import StackedCircularFooterDemo from "@/pages/footer";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// const AppLayout = lazy(() => import("../Layout"));
const Homepage = lazy(() => import("../pages/home"));
const AboutPage = lazy(() => import("../pages/about"));
const ProjectPage = lazy(() => import("../pages/project"));


const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path={ROUTE_PATH.root}
        element={
          <div className="w-full h-full">
            <main>
              <main>
                <Suspense>
                  <NavbarDemo />
                </Suspense>
              </main>
              <main>
                <Suspense>
                  <Homepage />
                </Suspense>
              </main>
            </main>
            <main>
              <AboutPage />
            </main>
            <main>
              <ProjectPage />
            </main>
            <main><StackedCircularFooterDemo/></main>
          </div>
        }
      >
      </Route>
      
    </Routes>
  );
};

export default AllRoutes;

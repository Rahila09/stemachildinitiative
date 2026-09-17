import { lazy, Suspense } from "react";
import { useRoute } from "./lib/router";
import { useLenis, useRevealOnScroll } from "./lib/motion";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Programmes = lazy(() => import("./pages/Programmes"));
const Impact = lazy(() => import("./pages/Impact"));
const Teams = lazy(() => import("./pages/Teams"));
const Contact = lazy(() => import("./pages/Contact"));

function renderRoute(route: string) {
  switch (route) {
    case "about":
      return <About />;
    case "programmes":
      return <Programmes />;
    case "impact":
      return <Impact />;
    case "teams":
      return <Teams />;
    case "contact":
      return <Contact />;
    default:
      return <Home />;
  }
}

function App() {
  const route = useRoute();
  useLenis();
  useRevealOnScroll();
  return (
    <div key={route} className="route-in">
      <Suspense fallback={null}>{renderRoute(route)}</Suspense>
    </div>
  );
}

export default App;

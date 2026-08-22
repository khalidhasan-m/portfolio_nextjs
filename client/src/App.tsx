/** Design: The Masterwork Index — a focused one-page editorial experience. */
import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

const CaseStudy = lazy(() => import("./pages/CaseStudy"));

function App() {
  return <ErrorBoundary><Suspense fallback={<main className="route-loading">Loading the case study…</main>}><Switch><Route path="/" component={Home} /><Route path="/work/:slug" component={CaseStudy} /><Route><Home /></Route></Switch></Suspense></ErrorBoundary>;
}

export default App;

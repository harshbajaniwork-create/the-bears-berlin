import { Route, RootRoute, Router } from "@tanstack/react-router";
import { lazy } from "react";
import RootComponent from "../components/RootComponent";

// Main pages - keep these as direct imports for faster initial load
import App from "../App";
import Services from "../app/services/page";
import Contact from "../app/contact/page";
import About from "../app/about/page";
import Projects from "../app/projects/page";
import MoodJungle from "../app/mood-jungle/page";
import MoodJungleAll from "../app/mood-jungle-all/page";

// Lazy load project pages to reduce initial bundle size
const MirageProject = lazy(() => import("../app/projects/mirage/page"));
const MananaProject = lazy(() => import("../app/projects/manana/page"));
const FableticsProject = lazy(() => import("../app/projects/fabletics/page"));
const SinousSistersProject = lazy(() =>
  import("../app/projects/sinous-sisters/page")
);
const LeWagonProject = lazy(() => import("../app/projects/le-wagon/page"));
const GinjaProject = lazy(() => import("../app/projects/ginja/page"));
const NikeJilouProject = lazy(() => import("../app/projects/nike-jilou/page"));
const NikeSp24Project = lazy(() => import("../app/projects/nike-sp24/page"));
const ThreeDProject = lazy(() => import("../app/projects/3d/page"));
const AfroHealthProject = lazy(() => import("../app/projects/afrohealth/page"));
const MotionProject = lazy(() => import("../app/projects/motion/page"));
const ZalandoNikeProject = lazy(() =>
  import("../app/projects/zalando-nike/page")
);

// Lazy load legal pages
const PrivacyPolicy = lazy(() => import("../app/privacy-policy/page"));
const Impressum = lazy(() => import("../app/impressum/page"));

const rootRoute = new RootRoute({
  component: RootComponent,
  notFoundComponent: () => <div>Page not found</div>,
});

// Create routes for all pages
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
});

const servicesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});

const moodJungleRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/mood-jungle",
  component: MoodJungle,
});

const moodJungleAllRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/mood-jungle-all",
  component: MoodJungleAll,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

// Projects parent route
const projectsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: Projects,
});

// Brand-specific project routes
const afrohealthProjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/afrohealth",
  component: AfroHealthProject,
});

const nikejilouProjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/nike-jilou",
  component: NikeJilouProject,
});

const zalandoNikeProjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/zalando-nike",
  component: ZalandoNikeProject,
});

const nikeSp24ProjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/nike-sp24",
  component: NikeSp24Project,
});

const mirageProjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/mirage",
  component: MirageProject,
});

const brandPlacesProjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/le-wagon",
  component: LeWagonProject,
});

const mananaProjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/manana",
  component: MananaProject,
});

const fableticsProjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/fabletics",
  component: FableticsProject,
});

const sinousSistersProjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/sinous-sisters",
  component: SinousSistersProject,
});

const ginjaFoodsProjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/ginja",
  component: GinjaProject,
});

const motionProjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/motion",
  component: MotionProject,
});

const ThreeDProjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/projects/3d",
  component: ThreeDProject,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const privacyRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/privacy-policy",
  component: PrivacyPolicy,
});

const impressumRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/impressum",
  component: Impressum,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  moodJungleRoute,
  moodJungleAllRoute,
  contactRoute,
  projectsRoute,
  afrohealthProjectRoute,
  nikejilouProjectRoute,
  nikeSp24ProjectRoute,
  zalandoNikeProjectRoute,
  mirageProjectRoute,
  brandPlacesProjectRoute,
  mananaProjectRoute,
  fableticsProjectRoute,
  sinousSistersProjectRoute,
  ginjaFoodsProjectRoute,
  ThreeDProjectRoute,
  motionProjectRoute,
  aboutRoute,
  privacyRoute,
  impressumRoute,
]);

export const router = new Router({
  routeTree,
  defaultPreload: "intent",
  defaultPendingComponent: () => <div>Loading...</div>,
});

export default router;

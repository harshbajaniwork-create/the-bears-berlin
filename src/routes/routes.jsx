import { Route, RootRoute, Router } from "@tanstack/react-router";
import Services from "../app/services/page";
import App from "../App";
import Contact from "../app/contact/page";
import About from "../app/about/page";
import Projects from "../app/projects/page";
import MirageProject from "../app/projects/mirage/page";
import MananaProject from "../app/projects/manana/page";
import FableticsProject from "../app/projects/fabletics/page";
import SinousSistersProject from "../app/projects/sinous-sisters/page";
import PrivacyPolicy from "../app/privacy-policy/page";
import Impressum from "../app/impressum/page";
import MoodJungle from "../app/mood-jungle/page";
import RootComponent from "../components/RootComponent";
import LeWagonProject from "../app/projects/le-wagon/page";
import GinjaProject from "../app/projects/ginja/page";
import NikeJilouProject from "../app/projects/nike-jilou/page";
import NikeSp24Project from "../app/projects/nike-sp24/page";
import ThreeDProject from "../app/projects/3d/page";
import MoodJungleAll from "../app/mood-jungle-all/page";
import AfroHealthProject from "../app/projects/afrohealth/page";
import MotionProject from "../app/projects/motion/page";
import ZalandoNikeProject from "../app/projects/zalando-nike/page";

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

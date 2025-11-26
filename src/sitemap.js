export const BASE_URL = "https://thebearsberlin.com";

export const staticRoutes = [
  { path: "/", name: "Home", priority: 1.0, changefreq: "weekly" },
  { path: "/about", name: "About", priority: 0.8, changefreq: "monthly" },
  { path: "/services", name: "Services", priority: 0.9, changefreq: "monthly" },
  { path: "/projects", name: "Projects", priority: 0.9, changefreq: "weekly" },
  { path: "/contact", name: "Contact", priority: 0.7, changefreq: "monthly" },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
    priority: 0.3,
    changefreq: "yearly",
  },
  {
    path: "/impressum",
    name: "Impressum",
    priority: 0.3,
    changefreq: "yearly",
  },
  {
    path: "/mood-jungle",
    name: "Mood Jungle",
    priority: 0.6,
    changefreq: "monthly",
  },
  {
    path: "/mood-jungle-all",
    name: "Mood Jungle All",
    priority: 0.6,
    changefreq: "monthly",
  },
];

export const projectRoutes = [
  {
    path: "/projects/afrohealth",
    name: "AfroHealth Project",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/projects/nike-jilou",
    name: "Nike Jilou Project",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/projects/nike-sp24",
    name: "Nike SP24 Project",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/projects/zalando-nike",
    name: "Zalando Nike Project",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/projects/mirage",
    name: "Mirage Project",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/projects/le-wagon",
    name: "Le Wagon Project",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/projects/manana",
    name: "Manana Project",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/projects/fabletics",
    name: "Fabletics Project",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/projects/sinous-sisters",
    name: "Sinous Sisters Project",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/projects/ginja",
    name: "Ginja Project",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/projects/motion",
    name: "Motion Project",
    priority: 0.8,
    changefreq: "monthly",
  },
  {
    path: "/projects/3d",
    name: "3D Project",
    priority: 0.8,
    changefreq: "monthly",
  },
];

export const allRoutes = [...staticRoutes, ...projectRoutes];

export const excludeRoutes = ["/admin", "/private", "/api"];

export const dynamicRoutes = async () => {
  // Fetch dynamic routes from API or database if required
  // For now, return empty array as all routes are static
  return [];
};

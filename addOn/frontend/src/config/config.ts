import MapIcon from "@mui/icons-material/Map";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { LayoutOptions } from "../layouts/LayoutContext";
import AppBarTitle from "../transiscopeCompiegnois/AppBarTitle";
import Footer from "../transiscopeCompiegnois/Footer";

declare global {
  interface Window {
    VITE_MIDDLEWARE_URL: string;
    VITE_MAPBOX_ACCESS_TOKEN: string;
  }
}

interface ConfigInterface {
  middlewareUrl: string;
  mapboxAccessToken: string;
  importableResources: string[];
  title: string;
  layout: LayoutOptions;
}

const config: ConfigInterface = {
  // Middleware API url (ex: https://<host>:<port>/). Should contain a trailing slash.
  middlewareUrl: window.VITE_MIDDLEWARE_URL,

  // Mapbox Access Token used for addresses completion
  mapboxAccessToken: window.VITE_MAPBOX_ACCESS_TOKEN,

  // Displays import tab when creating resource if it is listed here
  importableResources: [],

  // Application title
  title: "Transiscope en Pays Compiégnois",

  // UI layout configuration
  layout: {
    name: "topMenu",
    options: {
      logo: {
        url: "/logo192.png",
        alt: "Transiscope en Pays Compiégnois",
      },
      title: AppBarTitle,
      mainMenu: [
        {
          resource: "Organization",
          label: "La carte",
          link: "/Organization?perPage=500&sort=pair%3Alabel&view=map&lat=49.411643322126615&lng=2.8334426879882817&zoom=12",
          icon: MapIcon,
        },
        {
          resource: "Event",
          label: "L'agenda",
          link: "/Event",
          icon: CalendarMonthIcon,
        },
      ],
      footer: Footer,
    },
  },
};

export default config;

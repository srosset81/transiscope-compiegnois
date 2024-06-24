declare global {
  interface Window {
    VITE_MIDDLEWARE_URL: string;
    VITE_MAPBOX_ACCESS_TOKEN: string;
  }
}

const config = {
  // Middleware API url (ex: https://<host>:<port>/). Should contain a trailing slash.
  middlewareUrl: window.VITE_MIDDLEWARE_URL,

  // Mapbox Access Token used for addresses completion
  mapboxAccessToken: window.VITE_MAPBOX_ACCESS_TOKEN,

  // Displays import tab when creating resource if it is listed here
  importableResources: [],
};

export default config;

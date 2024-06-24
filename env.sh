rm "$1/env.js"
echo "window.VITE_MIDDLEWARE_URL = '$VITE_MIDDLEWARE_URL';" >> "$1/env.js"
echo "window.VITE_MAPBOX_ACCESS_TOKEN = '$VITE_MAPBOX_ACCESS_TOKEN';" >> "$1/env.js"

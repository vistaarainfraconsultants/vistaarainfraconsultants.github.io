// Send visitors on to the main website after a short pause (the button works immediately).
// The page itself stays a real page so Google can read the site name and logo from it.
setTimeout(() => location.replace(document.getElementById('go').href), 2500);

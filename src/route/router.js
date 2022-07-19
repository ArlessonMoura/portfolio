const routes = {
  404: "src/pages/404/404.html",
  "/": "src/pages/home/home.html",
  "/hello": "src/pages/landing-page-model/landing-page-model.html",
  "/report": "src/pages/report-model/report-model.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const cssModule = route.split(".")[0] + ".css";
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("imported-stylesheet").href = cssModule;
  document.getElementById("main-page").innerHTML = html;
};

const route = async (event) => {
  event = event || window.event;
  event.preventDefault(); 
  window.history.pushState({}, "", event.target.value);
  await handleLocation();
};

window.onpopstate = handleLocation;
window.route = route;
window.location.reload = handleLocation;
window.location.reload(true)

handleLocation();

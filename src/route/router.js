const routes = {
  "/": "src/pages/home/home.html",
  "/pt-br/hello": "src/pages/pt-br/pt-br-landing-page-model/pt-br-landing-page-model.html",
  "/pt-br/report": "src/pages/pt-br/pt-br-report-model/pt-br-report-model.html",
  "/en-us/hello": "src/pages/en-us/en-us-landing-page-model/en-us-landing-page-model.html",
  "/en-us/report": "src/pages/en-us/en-us-report-model/en-us-report-model.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path];
  const cssModule = route.split(".")[0] + ".css";
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("imported-stylesheet").href = cssModule;
  document.getElementById("main-page").innerHTML = html;
};

const route = (event) => {
  event = event || window.event;
  event.preventDefault(); 
  window.history.pushState({}, "", event.target.value);
  handleLocation();
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

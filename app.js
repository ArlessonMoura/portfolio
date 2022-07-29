const state = {
  "dark-mode": false,
  "lang": undefined,
}

// const darkMode = () => {
  
// }

const dynamicMenu = () => {
  const path = window.location.pathname;
  const homeBtn = document.getElementById("home-menu");
  const reportBtn = document.getElementById("report");
  const webSiteBtn = document.getElementById("hello");
  const printBtn = document.getElementById("print");
  switch (path) {
    case "/":
      homeBtn.disabled = true;
      reportBtn.disabled = true
      webSiteBtn.disabled = true;
      printBtn.disabled = true;
      homeBtn.classList.add("hidden-button");
      reportBtn.classList.add("hidden-button");
      webSiteBtn.classList.add("hidden-button");
      printBtn.classList.add("hidden-button");      
      break;

    case "/hello":
      homeBtn.disabled = false;
      reportBtn.disabled = false;
      webSiteBtn.disabled = true;
      printBtn.disabled = true;
      homeBtn.classList.remove("hidden-button");
      reportBtn.classList.remove("hidden-button");
      webSiteBtn.classList.add("hidden-button");
      printBtn.classList.add("hidden-button");
      break;

    case "/report":
      homeBtn.disabled = false;
      reportBtn.disabled = true;
      webSiteBtn.disabled = false;
      printBtn.disabled = false;
      homeBtn.classList.remove("hidden-button");
      reportBtn.classList.add("hidden-button");
      webSiteBtn.classList.remove("hidden-button");
      printBtn.classList.remove("hidden-button");
      break;

    case "/404":
      homeBtn.disabled = false;
      reportBtn.disabled = false;
      webSiteBtn.disabled = false;
      printBtn.disabled = true;
      homeBtn.classList.remove("hidden-button");
      reportBtn.classList.remove("hidden-button");
      webSiteBtn.classList.remove("hidden-button");
      printBtn.classList.add("hidden-button");
      break;
  
    default:
      break;
  }
}

// document.getElementById("pt-br").addEventListener("click", handleState("lang", "pt-br"));
// document.getElementById("en-us").addEventListener("click", handleState("lang", "en-us"));
// document.getElementById("dark-mode").addEventListener("click", handleState("dark-mode", undefined));

dynamicMenu();

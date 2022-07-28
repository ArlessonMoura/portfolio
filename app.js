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
      homeBtn.style.visibility = "hidden";
      reportBtn.style.visibility = "hidden";
      webSiteBtn.style.visibility = "hidden";
      printBtn.style.visibility = "hidden";
      break;

    case "/hello":
      homeBtn.style.visibility = "visible";
      reportBtn.style.visibility = "visible";
      webSiteBtn.style.visibility = "hidden";
      printBtn.style.visibility = "hidden";
      break;

    case "/report":
      homeBtn.style.visibility = "visible";
      reportBtn.style.visibility = "hidden";
      webSiteBtn.style.visibility = "visible";
      printBtn.style.visibility = "visible";
      break;

    case "/404":
      homeBtn.style.visibility = "visible";
      reportBtn.style.visibility = "visible";
      webSiteBtn.style.visibility = "visible";
      printBtn.style.visibility = "hidden";
      break;
  
    default:
      break;
  }
}

// document.getElementById("pt-br").addEventListener("click", handleState("lang", "pt-br"));
// document.getElementById("en-us").addEventListener("click", handleState("lang", "en-us"));
// document.getElementById("dark-mode").addEventListener("click", handleState("dark-mode", undefined));

dynamicMenu();

let dark = false;

const darkMode = () => {
  const bodyHtml = document.getElementById("body");
  if (!dark) {
    bodyHtml.classList.remove("light-mode");
    bodyHtml.classList.add("dark-mode");
    dark = true;
    return dark;
  } 
  if (dark) {
    bodyHtml.classList.remove("dark-mode");
    bodyHtml.classList.add("light-mode");
    dark = false;
    return dark;
  }
}

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

const dynamicOverflow = () => {
  const path = window.location.pathname;
  const bodyHtml = document.getElementById("body");
  switch (path) {
    case "/":
      bodyHtml.style.height = "100vh";
      bodyHtml.classList.add("overflow-y");      
    break;
      
    case "/hello":
      bodyHtml.style.height = "100vh";        
      bodyHtml.classList.remove("overflow-y");        
    break;
        
    case "/report":
      bodyHtml.style.height = "fit-content";
      bodyHtml.classList.remove("overflow-y");
    break;
          
    case "/404":
      bodyHtml.style.height = "100vh";
      bodyHtml.classList.add("overflow-y");
    break;
            
    default:
    break;
  }
}

const dynamicSettings = () => {
  dynamicMenu();
  dynamicOverflow();
}
          
dynamicSettings();

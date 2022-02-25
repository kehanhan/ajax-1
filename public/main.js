console.log("This is main.js");
getHTML.onclick = () => {
  const requestHTML = new XMLHttpRequest();
  requestHTML.open("GET", "/3.html");
  requestHTML.onload = () => {
    console.log("success");
    const divTag = document.createElement("div");
    const divContent = requestHTML.response;
    console.log(divContent);
    divTag.innerHTML = divContent;
    document.body.appendChild(divTag);
  };
  requestHTML.onerror = () => {
    console.log("failed");
  };
  requestHTML.send();
};
getCSS.onclick = () => {
  const requestCSS = new XMLHttpRequest();
  requestCSS.open("GET", "/style.css");
  requestCSS.onload = () => {
    console.log("success");
    const styleTag = document.createElement("style");
    const styleContent = requestCSS.response;
    console.log(styleContent);
    styleTag.innerHTML = styleContent;
    document.head.appendChild(styleTag);
  };
  requestCSS.onerror = () => {
    console.log("failed");
  };
  requestCSS.send();
};

getJS.onclick = () => {
  const requestJS = new XMLHttpRequest();
  requestJS.open("GET", "/2.js");
  requestJS.onload = () => {
    console.log("success");
    const scriptTag = document.createElement("script");
    const scriptContent = requestJS.response;
    console.log(scriptContent);
    scriptTag.innerHTML = scriptContent;
    document.body.appendChild(scriptTag);
  };

  requestJS.onerror = () => {
    console.log("failed");
  };
  requestJS.send();
};

getXML.onclick = () => {
  const requestXML = new XMLHttpRequest();
  requestXML.open("GET", "/4.xml");
  requestXML.onreadystatechange = () => {
    if (requestXML.readyState === 4 && requestXML.status === 200) {
      const xmlContent = requestXML.responseXML;
      // console.log(typeof xmlContent);
      // console.log(xmlContent);
      console.log(
        xmlContent.getElementsByTagName("warning")[0].textContent.trim()
      );
    }
  };
  requestXML.send();
};

getJSON.onclick = () => {
  const requestJSON = new XMLHttpRequest();
  requestJSON.open("GET", "/5.json");
  requestJSON.onreadystatechange = () => {
    if (requestJSON.readyState === 4 && requestJSON.status === 200) {
      const jsonContent = JSON.parse(requestJSON.response);
      console.log(jsonContent);
      console.log(typeof jsonContent);
      myName.textContent = "Hello " + jsonContent.username + "!";
    }
  };
  requestJSON.send();
};

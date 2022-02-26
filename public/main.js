let n = 1;
console.log("This is main.js");

const ajax = (method, url, success) => {
  const request = new XMLHttpRequest();
  request.open(method, url);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status < 400) {
        success.call(null, request);
      } else {
        console.log("失败了，状态码：" + request.status);
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const htmlHandler = (request) => {
    console.log("成功");
    const divTag = document.createElement("div");
    divTag.innerHTML = request.response;
    document.body.appendChild(divTag);
  };
  ajax("GET", "/3.html", htmlHandler);
};

getCSS.onclick = () => {
  const cssHandler = (request) => {
    console.log("成功");
    const styleTag = document.createElement("style");
    styleTag.innerHTML = request.response;
    document.head.appendChild(styleTag);
  };
  ajax("GET", "/style.css", cssHandler);
};

getJS.onclick = () => {
  const jsHandler = (request) => {
    console.log("success");
    const scriptTag = document.createElement("script");
    scriptTag.innerHTML = request.response;
    document.body.appendChild(scriptTag);
  };
  ajax("GET", "/2.js", jsHandler);
};

getXML.onclick = () => {
  const xmlHandler = (request) => {
    const xmlContent = request.responseXML;
    // console.log(typeof xmlContent);
    // console.log(xmlContent);
    console.log(
      xmlContent.getElementsByTagName("warning")[0].textContent.trim()
    );
  };
  ajax("GET", "/4.xml", xmlHandler);
};

getJSON.onclick = () => {
  const jsonHandler = (request) => {
    const jsonContent = JSON.parse(request.response);
    // console.log(jsonContent);
    // console.log(typeof jsonContent);
    myName.textContent = "Hello " + jsonContent.username + "!";
  };
  ajax("GET", "/5.json", jsonHandler);
};

getPage.onclick = () => {
  const pageHandler = (request) => {
    const page = request.response;
    // console.log(page);
    const array = JSON.parse(page);
    // console.log(array);
    array.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.id;
      pageList.appendChild(li);
    });
    n += 1;
  };
  ajax("GET", `/page${n + 1}.json`, pageHandler);
};

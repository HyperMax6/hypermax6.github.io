const getLights = (callback) => {
  const url =
    "https://192.168.68.188/api/tTFBJDFp6nEVddbAf91zHxKlLMy63Uqhi3ePsctf/lights/";

  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    /* console.log(request, request.readyState); */
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("could not fetch data", undefined);
    }
  });

  request.open("GET", url);
  request.send();
};

getLights((err, data) => {
  console.log("callback fired");
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    document.getElementById("data").innerHTML = JSON.stringify(data, null, 6);
  }
});

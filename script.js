var viewer = OpenSeadragon({
  id: "openseadragon1",
  prefixUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/openseadragon/3.1.0/images/",
  showNavigator: true,
  showFullPageControl: false,
  showHomeControl: false,
  showZoomControl: false,
  visibilityRatio: 1.0,
  constrainDuringPan: true,
  homeFillsViewer: true,
  minZoomLevel: 1,
  defaultZoomLevel: 1,
  maxZoomPixelRatio: 2,
  backgroundColor: "#000",
});

const apiKey = "5KvmVfJn8h8O67Tqwt8fmTSzXFcN7HzCjQEp7Ogk";
const url = `https://api.nasa.gov/planetary/apod?api_key=${"5KvmVfJn8h8O67Tqwt8fmTSzXFcN7HzCjQEp7Ogk"}`;

fetch(url)
  .then((response) => response.json())
  .then((apodData) => {
    console.log("APOD verisi:", apodData);

    if (apodData.media_type === "image") {
      viewer.open({
        type: "image",
        url: apodData.hdurl || apodData.url,
      });
    }
  });

getStartedButton.onclick = function () {
  getStartedClick();
};

learnMoreButton.onclick = function () {
  learnMoreClick();
};

function getStartedClick() {
  const viewerSection = document.getElementById("viewer");

  viewerSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function learnMoreClick() {
  const aboutSection = document.getElementById("about");

  aboutSection.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

document.getElementById("zoom-in").onclick = function () {
  viewer.viewport.zoomBy(1.2);
  viewer.viewport.applyConstraints();
};

document.getElementById("zoom-out").onclick = function () {
  viewer.viewport.zoomBy(0.8);
  viewer.viewport.applyConstraints();
};

document.getElementById("home").onclick = function () {
  viewer.viewport.goHome();
};

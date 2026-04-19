//https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event

const modelViewer = document.querySelector('#Rafale1');
document.body.onscroll = (event) => {
    modelViewer.cameraOrbit = "6deg " + -(window.scrollY / 10) + "deg 2.5m";
};
const videoElement = document.querySelector("video");
const btn = document.querySelector(".btn");

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;

    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("whoops, error here:", error);
  }
};

btn.addEventListener("click", async () => {
  btn.disabled = true;
  await videoElement.requestPictureInPicture();
  btn.disabled = false;
});
selectMediaStream();

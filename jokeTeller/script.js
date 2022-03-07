const key = "241d991a9d0b44e2bfb02fdeada014ad";
const audioElement = document.querySelector("audio");
const btn = document.querySelector(".btn");
function toggleBtn() {
  btn.disabled = !btn.disabled;
}

const tellMe = (joke) => {
  VoiceRSS.speech({
    key: key,
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
};
const getJoke = async () => {
  let joke = "";
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=political,racist,explicit"
    );
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup}...${data.delivery}`;
    } else {
      joke = data.joke;
    }
    tellMe(joke);
    toggleBtn();
  } catch (error) {
    console.log("whoops,error here: ", error);
  }
};

audioElement.addEventListener("ended", toggleBtn);
btn.addEventListener("click", getJoke);

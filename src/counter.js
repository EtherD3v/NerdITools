export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Answer : ${counter}`;
    switch(counter){
      case 0:
        element.innerHTML = `CAPTCHA : please click here`;
        break;
      case 1:
        element.innerHTML = `How many films has Christopher Nolan designed?`;
        break;
      case 12:
        element.innerHTML = `What is the maximum number of players on a vanilla Minecraft server?`;
        break;
      case 20:
        element.innerHTML = `What is the default port for HTTP protocol ?`;
        break;
      case 80:
        element.innerHTML = `How many keys does a standart AZERTY keyboard have ?`;
        break;
      case 105:
        element.innerHTML = `How many different colors can you get with 8 bits ? `;
        break;
      case 256:
        if ("yes" === prompt("Do you fingers hurt?")){
          alert("You're a human! :)")
          element.innerHTML = `VERIFIED`;
        }
        else{
          alert("You failed! :( \n Please Retry.")
          element.innerHTML = `END`
        }
    }
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

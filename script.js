let previousScene = "scene1";

const teddyContainer = document.getElementById("teddyContainer");

window.addEventListener("load", () => {

  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2500);

  createTeddies();
});

function createTeddies(){

  const bears = [
    "🧸","🐻","🧸","🐻"
  ];

  for(let i=0;i<25;i++){

    const bear = document.createElement("div");
    bear.className = "floatingBear";

    bear.innerHTML =
      bears[Math.floor(Math.random()*bears.length)];

    bear.style.left = Math.random()*100 + "%";
    bear.style.animationDuration =
      (10 + Math.random()*12) + "s";

    teddyContainer.appendChild(bear);
  }
}

function goScene(id){

  document
    .querySelectorAll(".scene")
    .forEach(scene => scene.classList.remove("active"));

  document
    .getElementById(id)
    .classList.add("active");

  if(id==="letterScene"){
    typeLetter();
  }
}

function showNoPage(fromScene){

  previousScene = fromScene;

  document
    .querySelectorAll(".scene")
    .forEach(scene => scene.classList.remove("active"));

  document
    .getElementById("noScene")
    .classList.add("active");
}

function backToFlow(){
  goScene(previousScene);
}

const musicBtn =
document.getElementById("musicBtn");

const music =
document.getElementById("bgMusic");

let playing = false;

musicBtn.addEventListener("click",()=>{

  if(!playing){
    music.play();
    playing=true;
    musicBtn.innerHTML="🔊";
  }else{
    music.pause();
    playing=false;
    musicBtn.innerHTML="🎵";
  }
});

function typeLetter(){

  const letter =
`Today is your birthday — and this website
was created with love, smiles, teddy bears
and warm wishes just for you.

Replace this text with your full letter later.`;

  const box =
  document.getElementById("typedLetter");

  box.innerHTML="";

  let i=0;

  const timer=setInterval(()=>{

    box.innerHTML += letter.charAt(i);

    i++;

    if(i>=letter.length){
      clearInterval(timer);
    }

  },20);
}

function showGift(){

  goScene("giftScene");

  const flowers =
  document.getElementById("sunflowers");

  flowers.innerHTML="";

  for(let i=0;i<40;i++){

    const f =
    document.createElement("div");

    f.innerHTML="🌻";

    f.style.fontSize="40px";

    flowers.appendChild(f);
  }
}

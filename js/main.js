//worked on with House Hayden: Rebecca, Kadeisha, Jeffrey, and Anastasia
const img={
  spock:"images/spock.png",
  lizard:"images/lizard.png",
  rock:"images/rock.png",
  paper:"images/paper.png",
  scissors:"images/scissors.png",
}
const btn = {
  all: document.querySelectorAll('.buttons'),
  rock: document.querySelectorAll(".rock")[0],
  paper: document.querySelectorAll(".paper")[0],
  scissors: document.querySelectorAll(".scissors")[0],
  spock: document.querySelectorAll(".spock")[0],
  lizard: document.querySelectorAll(".lizard")[0],
  reset: document.getElementById("reset")
}

const game = {
  num: document.getElementById("num"),
  botNum: document.getElementById("botNum"),
  msg: document.getElementById("msg"),
  img: document.getElementById("weapons"),
  playImg:document.getElementById("playImg"),
  botImg: document.getElementById("botImg"),
  playerScore: 0,
  botScore: 0,
  click(){
    let button = [btn.rock, btn.paper, btn.scissors, btn.spock, btn.lizard]
    button.forEach((play) =>{
      play.addEventListener("click", (e) =>{
          game.getImg(e)
          game.getPlay(e.target.innerHTML);
      })
    })
  },
  getImg(e){
    if(e.target.classList.contains("spock")){
      game.playImg.src = img.spock
    }else if(e.target.classList.contains("lizard")){
      game.playImg.src = img.lizard
    }else if(e.target.classList.contains("rock")){
      game.playImg.src = img.rock
    }else if(e.target.classList.contains("paper")){
      game.playImg.src = img.paper
    }else if(e.target.classList.contains("scissors")){
      game.playImg.src = img.scissors
    }
  },
  getPlay(userPlay){
    fetch(`/api?rpsls=${userPlay}`)
    .then(response => response.json())
    .then(data =>{
      game.img.style.display = "flex"
      game.botImg.src = data.src
      game.playerScore += data.playerScore
      game.botScore += data.botScore
      game.botNum.innerHTML = game.botScore
      game.num.innerHTML = game.playerScore
      game.msg.innerHTML = `Bot has chosen: ${data.play}. ${data.winLose}`
    })
  },
  reset(){
      game.playerScore = 0
      game.botScore = 0
      game.botNum.innerHTML = game.botScore
      game.num.innerHTML = game.playerScore
      game.img.style.display = "none"
      game.msg.innerHTML = "Press a Button to Play!"
  },
}

game.click()
btn.reset.onclick = game.reset

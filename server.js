//worked on with House Hayden: Rebecca, Kadeisha, Jeffrey, and Anastasia
const PORT = process.env.PORT || 8000;
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/images/spock.png') {
    fs.readFile('images/SPOCK.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/images/rock.png') {
    fs.readFile('images/rock.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'images/png'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/images/paper.png') {
    fs.readFile('images/paper.png', function(err, data) {
      res.writeHead(200, {'Content-Type': 'images/png'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/images/scissors.png') {
      fs.readFile('images/scissors.png', function(err, data) {
        res.writeHead(200, {'Content-Type': 'images/png'});
        res.write(data);
        res.end();
      });
    }
    else if (page == '/images/lizard.png') {
        fs.readFile('images/lizard.png', function(err, data) {
          res.writeHead(200, {'Content-Type': 'images/png'});
          res.write(data);
          res.end();
        });
      }
  else if (page == '/api') {
    if('rpsls' in params){
      const randomNum = Math.random();
      if(randomNum < 0.2){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const rock= {
          play: "rock",
          playerScore: 0,
          botScore: 0,
          src:"images/rock.png"
          }
          if(params.rpsls == "Scissors" || params.rpsls == "Lizard"){
              rock.winLose = "You have lost"
              rock.botScore = 1
          }else if(params.rpsls == "Rock"){
              rock.winLose = "Tie"
          }else{
              rock.winLose = "You have won"
              rock.playerScore = 1
          }
        res.end(JSON.stringify(rock));
        }else if(randomNum < 0.4){
            res.writeHead(200, {'Content-Type': 'application/json'});
            const paper = {
              play: "paper",
              playerScore: 0,
              botScore: 0,
              src:"images/paper.png"
            }
            if(params.rpsls == "Rock" || params.rpsls == "Spock"){
                paper.winLose = "You have lost"
                paper.botScore = 1
            }else if(params.rpsls == "Paper"){
                paper.winLose = "Tie"
            }else{
                paper.winLose = "You have won"
                paper.playerScore = 1
            }
          res.end(JSON.stringify(paper));
        }else if(randomNum < 0.6){
            res.writeHead(200, {'Content-Type': 'application/json'});
            const scissors = {
              play: "scissors",
              playerScore: 0,
              botScore: 0,
              src:"images/scissors.png"
            }
            if(params.rpsls == "Paper" || params.rpsls == "Lizard"){
                scissors.winLose = "You have lost"
                scissors.botScore = 1
            }else if(params.rpsls == "Scissors"){
                scissors.winLose = "Tie"
            }else{
                scissors.winLose = "You have won"
                scissors.playerScore = 1
            }
          res.end(JSON.stringify(scissors));
        }else if(randomNum < 0.8){
              res.writeHead(200, {'Content-Type': 'application/json'});
              const spock = {
                play: "spock",
                playerScore: 0,
                botScore: 0,
                src:"images/spock.png"
              }
              if(params.rpsls == "Scissors" || params.rpsls == "Rock"){
                  spock.winLose = "You have lost"
                  spock.botScore = 1
              }else if(params.rpsls == "Spock"){
                  spock.winLose = "Tie"
              }else{
                  spock.winLose = "You have won"
                  spock.playerScore = 1
              }
            res.end(JSON.stringify(spock));
        }else{
              res.writeHead(200, {'Content-Type': 'application/json'});
              const lizard = {
                play: "lizard",
                playerScore: 0,
                botScore: 0,
                src:"images/lizard.png"
              }
              if(params.rpsls == "Spock" || params.rpsls == "Paper"){
                  lizard.winLose = "You have lost"
                  lizard.botScore = 1
              }else if(params.rpsls == "Lizard"){
                  lizard.winLose = "Tie"
              }else{
                  lizard.winLose = "You have won"
                  lizard.playerScore = 1
              }
            res.end(JSON.stringify(lizard));
        }
      }
  }
  else if (page == '/css/stylesheet.css'){
    fs.readFile('css/stylesheet.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(PORT);

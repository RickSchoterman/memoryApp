import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() {

  }

  startTijd;
  totaalTijd = 0;
  aantalTijden = 0;
  gemiddeldeTijd = 0;
  firstCard;
  secondCard;
  public reDraw: boolean;
  karakter;
  intervalID;
  tijdID;


  speelveld = document.getElementById("speelveld");
  scoreLijst = document.getElementById("topscores");
  speeltijd = document.getElementById("gemiddeld");
  gevonden;


   vindTijd;
   timerBalk;
   timerBalkWidth;

   toontijd;

   speelSeconden;

   timer;

   timefield = document.getElementById("tijd");

   AantalGevonden = 0;

   cards = [];

   seconden;

   numberOfCards;

   openKaarten;

   numberOfCardsLeft;
// Aantal kaarten dat nog op het bord ligt
   topScores = [{
    name: "Barack Obama",
    time: 200
  },
    {
      name: "Bernie Sanders",
      time: 300
    },
    {
      name: "Hillary Clinton",
      time: 400
    },
    {
      name: "Jeb Bush",
      time: 500
    },
    {
      name: "Donald Trump",
      time: 600
    }
  ];


  public initGame(size) {
    this.initVars(size);
    this.vulSpeelveld(size);
    //this.showScores();
  }

  public initVars(size) {


    //Speelseconden timer
    this.speelSeconden = 0;

    this.toontijd = 5;
    this.vindTijd = null;

    this.timerBalk = document.getElementById("timeLeft");
    let style = getComputedStyle(this.timerBalk);
    let width = style.getPropertyValue("width");

    console.log("Width: " + width);

    this.timerBalkWidth = width.substr(0, 3);

    console.log(this.timerBalkWidth);

    //reset de speeltijd
    this.timefield.innerText = "0";
    this.seconden = 0;
    window.clearInterval(this.timer);
    this.timer = null;

    //reset Gemiddelde speeltijd
    this.gemiddeldeTijd = 0;

    // Initialiseer alle benodigde variabelen en de velden op het scherm

    //reset gemiddele tijd
    this.gemiddeldeTijd = 0;
    this.aantalTijden = 0;


    var speelveld = document.getElementById("speelveld");
    var scoreLijst = document.getElementById("topscores");
    var speeltijd = document.getElementById("gemiddeld");
    this.gevonden = document.getElementById("gevonden");

    this.karakter = document.getElementById("character");

    //reset aantalGevonden kaarten
    this.AantalGevonden = 0;
    this.gevonden.innerText = this.AantalGevonden;


    //Reset de content van het speelveld
    speelveld.innerHTML = "";

    //reset de scoreLijst
    scoreLijst.innerHTML = "";

    this.openKaarten = 0;

    //Reset de cardsArray
    this.cards = [];

  }

  public vulSpeelveld(size) {
    // Bouw de size x size table speelveld op. Elk <td> element van de tabel
    // moet een karakter toegewezen worden. Hiervoor kan de nextletter functie
    // gebruikt worden. Ook moet de eventlistener cardClicked aan de cell gekoppeld worden
    // en de opmaak juist gezet worden.

    let cellCount = 0;

    var uniekeLetter = this.nextLetter(size);

    for (let i = 1; i <= size; i++) {
      //let row = this.speelveld.insertRow();
      for (let j = 1; j <= size; j++) {

        //
        // //let cell = row.insertCell();
        //
        // //Voeg de juiste kleur toe aan cell
        // cell.className = "inactive";
        //
        // //Voeg de juiste character toe
        // cell.innerText = this.karakter;
        //
        // //voeg een id waarde toe aan de kaart zodat we hem later kunnen indentificeren
        // cell.setAttribute("value", cellCount);
        //
        //
        // //voeg een eventListener toe
        // cell.addEventListener("click", function (event) {
        //
        //   let card = event.target;
        //   this.cardClicked(card);
        //
        // });


        //Voeg een unieke letter toe aan de cell
        //Deze word opgeslagen in de cards array


        this.cards.push(uniekeLetter());

        //Increment de cell count
        cellCount++;

      }


    }


  }

  public showScores(reDraw) {
    // Vul het topscore lijstje op het scherm.

    // Check of de lijst al op het scherm is getoond anders doe niks




    //Sorteer array met objecten bij tijd
    this.topScores.sort(function (a, b) {
      return a.time - b.time;
    });

    //als er meerdere scores zijn verwijderd de speler met de slechtste tijd
    let aantalScores = this.topScores.length;

    if(aantalScores > 5)
    {
      this.topScores.pop();
    }

    if (reDraw == true) {
      this.scoreLijst.innerHTML = "";
      this.setTijden(this.reDraw = true);

    }



    this.topScores.forEach(function (score) {

      var node = document.createElement("LI");
      var textnode = document.createTextNode(score.name + " : " + score.time);
      node.appendChild(textnode);

      this.scoreLijst.appendChild(node);

    });


  }

  public setTijden(reDraw) {
    // bereken de verlopen tijd, de gemiddlede tijd en het verschil tussen
    // de huidige speeltijd en de gemiddelde tijd en vul de elementen in de HTML.
    // Vul ook het aantal gevonden kaarten

    //Gemiddelde tijd
    let somTijden = 0;
    let aantal = 0;

    if (reDraw = true) {
      this.speeltijd.innerText = "";
    }

    //Itereer door de Topscores array en tel alle tijden bij elkaar op
    this.topScores.forEach(function (score) {
      aantal++;
      somTijden += score.time;
    });


    //Bereken de gemiddelde tijd
    this.gemiddeldeTijd = Math.floor(somTijden / aantal);

    //Update gemiddelde tijd op het scherm
    this.speeltijd.innerText = this.gemiddeldeTijd + " seconden";


  }

  public getSeconds() {
    // Een functie om de Systeemtijd in seconden in plaats van miliseconden
    // op te halen. Altijd handig.
  }

  nextLetter = function (size) {
    var letterArray = "AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ".substring(0, size * size).split('');
    var idx = 0;
    letterArray = this.shuffle(letterArray);
    return function () {
      var letter = letterArray[idx++];
      return letter;
    }
  };

  public cardClicked(card) {


    this.checkStarttijd();
    this.checkDerdeKaart();
    var draaiKaartOm = this.turnCard(card);
    if (draaiKaartOm == 2) {
      this.checkKaarten();
    }
  }

  public playTimer() {
    this.timerBalkWidth = this.timerBalkWidth - 37;
    this.timerBalk.style.width = this.timerBalkWidth + "px";

    if (this.firstCard.innerText != this.secondCard.innerText && this.timerBalkWidth == 0) {
      this.deactivateCards();
    }
  }

  public resetVindTimer() {
    this.timerBalk.style.width = "185px";
    this.timerBalkWidth = "185";

    window.clearInterval(this.vindTijd);
    this.vindTijd = null;
  }

  public checkStarttijd() {
    // Controleer of de startijd van het spel gezet is, i.e. het spel al gestart was.
    // Als dat niet zo is doe dat nu, en start de timeOut voor het bijhouden van de tijd.
  }

  public checkDerdeKaart() {
    // Controleer of het de derde kaart is die wordt aangeklikt.
    // Als dit zo is kunnen de geopende kaarten gedeactiveerd (gesloten) worden.

  }

  public turnCard(card) {
    // Draai de kaart om. Dit kan alleen als de kaart nog niet geopend of gevonden is.
    // Geef ook aan hoeveel kaarten er nu zijn omgedraaid en return dit zodat in de
    //


    // Bij een eerste klik op een kaart, word voor het eerst deze functie aangeroepen
    // Vandaar dat het aantal openkaarten nog steeds 0 is. In werkelijkheid is dit
    // natuurlijk niet zo


    if (this.openKaarten == 0) {
      this.firstCard = card;

      if (this.timer == null) {

        this.timer = window.setInterval(this.updateTime, 1000);
      }
    }

    if (this.openKaarten == 1) {
      if (this.vindTijd == null) {


        this.vindTijd = window.setInterval(this.playTimer, 1000);
      }

      this.secondCard = card;
    }


    if (this.openKaarten == 2) {
      return 2;
    } else if (card.className == "active" || (card.className == "found")) {} else {

      let cardValue = card.getAttribute("value");
      card.innerText = this.cards[cardValue];
      card.className = "active";

      this.openKaarten++;
    }


  }

  public deactivateCards() {

    // Functie om de twee omgedraaide kaarten weer terug te draaien

    this.firstCard.innerText = this.karakter;
    this.secondCard.innerText = this.karakter;

    this.firstCard.className = "inactive";
    this.secondCard.className = "inactive";

    //Reset het aantal openkaarten
    this.openKaarten = 0;


    this.resetVindTimer();


  }

  public toggleCard(element) {
    // Draai de kaart om, als de letter getoond wordt, toon dan de achterkant en
    // vice versa. switch dus van active naar inactive of omgekeerd.
  }

  public checkKaarten() {
    // Kijk of de beide kaarten gelijk zijn. Als dit zo is moet het aantal gevonden paren
    // opgehord worden, het aantal resterende kaarten kleiner worden en ervoor
    // gezorgd worden dat er niet meer op de kaarten geklikt kan worden. De kaarten
    // zijn nu found.
    // Als de kaarten niet gelijk zijn moet de timer gaan lopen van de toontijd, en
    // de timeleft geanimeerd worden zodat deze laat zien hoeveel tijd er nog is.

    if (this.firstCard != "") {
      if (this.firstCard.innerText == this.secondCard.innerText) {


        this.resetVindTimer();

        this.firstCard.className = "found";
        this.secondCard.className = "found";


        //Reset firstcard, secondcard
        this.firstCard = "";
        this.secondCard = "";

        this.AantalGevonden++;
        this.gevonden.innerText = this.AantalGevonden;
        this.openKaarten = 0;

        if (this.AantalGevonden == this.cards.length / 2) {
          this.endGame();
        }
      } else {
        this.deactivateCards();
      }
    }

  }

  public updateTime() {

    this.seconden++;
    this.timefield.innerText = this.seconden;
  }

  public tijdBijhouden() {
    if (this.numberOfCardsLeft == 0) {
      this.endGame();
    } else {

      this.setTijden(this.reDraw);
    }
  }

  public endGame() {

    window.clearInterval(this.timer);

    this.updateTopScores(this.seconden);
    this.showScores(this.reDraw = true);


  }

  public updateTopScores(speelTijd) {
    var name = prompt("Game has ended! Please enter your name");

    let newScore = {
      name: name,
      time: speelTijd
    };
    this.topScores.push(newScore);
  }

  public shuffle(array) {
    var currentIndex = array.length,
      temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

}

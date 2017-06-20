
//The Data Store
let quotes = [
  {quote:"Waste no more time arguing what a good man should be. Be one.",
   source: "Marcus Aurelius",
   citation: "Meditations",
   category: "stoics",
   year: "like, a long time ago..."
 }, {
   quote: "Search others for their virtues, thyself for thy vices.",
   source: "Benjamin Franklin",
   citation: "Poor Richard\'s Almanac",
   category: "ethics",
   year: ''
 }, {
   quote: "He who has courage despises the future.",
   source: "Napoleon Bonaparte",
   citation: '',
   category: "boldness",
   year: ''
 }, {
   quote: "Without hope, without fear.",
   source: "Caravaggio",
   citation: '',
   category: "boldness",
   year: ''
 }, {
   quote: "Only those who will risk going too far can possibly find out how far one can go.",
   source: "T.S. Elliot",
   citation: '',
   category: "boldness",
   year: ''
 }
];

let colors = [
  "green",
  "red",
  "blue",
  "purple",
  "grey",
  "black",
  "orange"
];

let usedQuoteArr = [],
    temp = null,
    int;

//Quotes change automatically after certain amount of time passes
function qt() {
          let int = setInterval(printQuote, 5000);
          console.log('timer running', int);
        }
// stop timer at set interval -- absolutely not working.
function killqt(interval){
  console.log(interval)
  killInt = setTimeout(clearInterval(interval), 25000);
  console.log('stopping in:');
    var i = 25;
    function startTimer() {
    var countdownTimer = setInterval(function() {
        console.log(i);
        i = i - 1;
        if (i <= 0) {
            clearTimeout(countdownTimer);
        }
      }, 1000);
    }
    startTimer();
  }

//Create random integer to source random quote
function getRandomInt(num){
  return Math.floor(Math.random() * (num));
  }

//Function is named getRandomQuote and returns a random object from the quotes array
//getRandomQuote function does not return a duplicate quote until all quotes have been returned once
function getRandomQuote(){

  let ranQuoteIndex = getRandomInt(quotes.length);
  let randoQuote = quotes[ranQuoteIndex];
    //create array to store used quotes
    usedQuoteArr.push(randoQuote)

      //use ranQuoteIndex to remove used quote from quotes array
      quotes.splice(ranQuoteIndex, 1)


    //reset loop to use again.
    if(quotes.length === 0){
      //Fisher-Yates Array Shuffle to create new random loop (!!Question: in trying to create F-Y as callback function outside of getRandomQuote, when calling an anonymous array -- array.length throws an error?!!)
      function shuffle (usedQuotesArr) {
        var i = 0,
            j = 0;

        for (i = usedQuotesArr.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = usedQuotesArr[i]
            usedQuotesArr[i] = usedQuotesArr[j]
            usedQuotesArr[j] = temp
          }
        }
            quotes = usedQuoteArr;
            usedQuoteArr = [];
        }
    //send quote to printQuote
    return randoQuote;
  }

  //Background color changes each time the quote changes
  function colorChange() {
    var red = getRandomInt(256);
    var green = getRandomInt(256);
    var blue = getRandomInt(256);
    var bgColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.body.style.backgroundColor = bgColor;
    }

//Function named printQuote calls the randomQuote function
//Function prints the quote to the page using the template supplied in the project instructions
function printQuote() {
      let selectedQuote = getRandomQuote();

      colorChange();
          document.getElementsByTagName("P")[0].innerHTML = selectedQuote.quote;
          document.getElementById("source").innerHTML = selectedQuote.source;
          if(selectedQuote.citation) {
            console.log(selectedQuote.citation);
              document.querySelector(".citation").style.visibility = "visible";
              document.querySelector(".citation").innerHTML = selectedQuote.citation;
            } else {
              document.querySelector(".citation").style.visibility = "hidden";
              document.querySelector(".citation").innerHTML = "";
            }

            // } else {
            //   document.getElementById("citation").style.visibility = 'hidden'
            // }
          if (selectedQuote.year) {
              document.querySelector(".year").style.visibility = "visible";
              document.querySelector(".year").innerHTML = selectedQuote.year;
            } else {
              document.querySelector(".year").style.visibility = "hidden";
              document.querySelector(".year").innerHTML = "";
            }
        }

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
qt();
killqt(int);

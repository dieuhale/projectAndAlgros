const suits = ["diamonds", "spades", "clubs", "hearts"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

let deck = new Array();

function makeDeck() {
  
  console.log(" The deck array before loops:", deck);
  console.log(" The deck array length before loops:", deck.length);
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      let card = { suit: suits[s], value: values[v] };
      console.log("testing the makeing of cards: ", card);
      deck.push(card);
    }
  }
console.log(" The deck array after loops:", deck);
console.log(" The deck array length after loops:", deck.length);
  return deck;
}

makeDeck();
console.log("The deck:", deck)
console.log("1 st card:", deck[0])
console.log( "1st card suit:", deck[0].suit)
console.log( "1st cards value:", deck[0].value)

function pullCard(s,v){
    var tempArr = []
    var result = ""

    for ( let d = 0; d < deck.length; d++){
        if (deck[d].value == v) {
            console.log(" the object pulled: ", deck[d])
            tempArr.push(deck[d])
            
        }
    }
    console.log( " the temp array:", tempArr)
    for ( let t = 0; t < tempArr.length; t++ ) {
        if( tempArr[t].suit == s) {
            console.log(" The result before:", result)
            result = tempArr[t]
            console.log(" The result after:", result)
        }
    }
    return result
}

pullCard("diamonds", "10")
pullCard("spades", "J")

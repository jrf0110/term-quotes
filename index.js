var
  colors = require('colors')
, tickIn = 1000 * 60
, quotes = [
    { quote: "The secret to building large apps is never build large apps. Break your applications into small pieces. Then, assemble those testable, bite-sized pieces into your big application"
    , author: "Justin Meyer" }
  , { quote: "The key is to acknowledge from the start that you have no idea how this will grow. When you accept that you don't know everything, you begin to design the system defensively. You identify the key areas that may change, which often is very easy when you put a little bit of time into it. For instance, you should expect that any part of the app that communicates with another system will likely change, so you need to abstract that away."
    , author: "Nicholas Zakas" }
  , { quote: "The more tied components are to each other, the less reusable they will be, and the more difficult it becomes to make changes to one without accidentally affecting another"
    , author: "Rebecca Murphey" }
  ]
, curr   = 0
, onTick = function(){
    if (curr >= quotes.length) curr = 0;
    var quote = quotes[curr];
    console.log("%s\n".blue + "- %s\n\n\n".grey, quote.quote, quote.author);
    curr++;
  }
, tick   = setInterval(onTick, tickIn);
;
onTick();
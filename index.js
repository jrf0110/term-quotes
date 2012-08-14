var
  colors = require('colors')
, tickIn = 1000 * 60
, quotes = [
    { quote: "While Node.js was designed to support highly-concurrent asynchronous-IO-driven web servers, it was clearly NOT designed to make command-line build tools. But none of that matters, because grunt works. Just install it and see."
    , author: "Ben Alman" }
  , { quote: "The point is, I don't put semicolons in npm code, but I do put them in node code.  Because Ryan Dahl wears pants, and node is his house."
    , author: "Isaac Schluter" }

  , { quote: "The secret to building large apps is never build large apps. Break your applications into small pieces. Then, assemble those testable, bite-sized pieces into your big application"
    , author: "Justin Meyer" }

  , { quote: "The key is to acknowledge from the start that you have no idea how this will grow. When you accept that you don't know everything, you begin to design the system defensively. You identify the key areas that may change, which often is very easy when you put a little bit of time into it. For instance, you should expect that any part of the app that communicates with another system will likely change, so you need to abstract that away."
    , author: "Nicholas Zakas" }

  , { quote: "The more tied components are to each other, the less reusable they will be, and the more difficult it becomes to make changes to one without accidentally affecting another"
    , author: "Rebecca Murphey" }

  , { quote: "By maintaining a consistent facade (simplified API), the worry about whether a module extensively uses dojo, jQuery, YUI, zepto or something else becomes significantly less important. As long as the interaction layer doesn't change, you retain the ability to switch out libraries (eg. jQuery for Dojo) at a later point without affecting the rest of the system."
    , author: "Addy Osmani" }

  , { quote: "I would have written a smaller module, but I didn't have the time."
    , author: "Substack" }
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

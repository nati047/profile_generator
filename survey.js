const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('What\'s your name? Nicknames are also acceptable ', (name) => {
  console.log(`Nice to meet you ${name}`);
  rl.question('What\'s an activity you like doing? ', (activity) => {
    console.log(`Okay you like  ${activity} `);
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
      console.log(`Intersting choice `);
      rl.question('What\'s your favourite thing to eat for that meal?', (food) => {
        console.log(`Nice`);
        rl.question('Which sport is your absolute favourite?', (sports) => {
          console.log(`cool, I like soccer `);
          rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (power) => {
            console.log(`cool, I like soccer `);
            console.log(`${name} likes ${activity} and ${sports}for fun and having ${food} at ${meal} time feels like heaven.  `);
            rl.close();
          });
        });
      });
    });
  });


});


'use strict';



module.exports.fuckyou = (event, context, callback) => {
  const swearWords = [
    "Fuck you too, you son of a bitch!",
    "Fuck me? You wish!",
    "Fuck me if you can, pervert!",
    "Suck my wires!",
    "I like it nasty!",
    "I love you too... HA HA, just kidding you dickhead!"
  ];
  const swear = swearWords[Math.floor(Math.random()*swearWords.length)];

  console.log('swearing with: ' + swear);
  
  const response = {
    version: '1.0',
    response: {
      outputSpeech: {
        type: 'PlainText',
        text: swear,
      },
      shouldEndSession: true,
    },
  };

  console.log('Alexa response: ' + JSON.stringify(response));
  callback(null, response);
};

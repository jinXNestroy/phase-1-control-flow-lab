let overLimitMessage = 'No can do.'
let thirtyBucksMessage = 'I will gladly take your thirty bucks.'
let twentyBucksMessage = 'That will be twenty bucks.'
let freeSampleMessage = 'This one is on me!'
let message
function scuberGreetingForFeet(feet) {
  if (feet <= 400) {

    message = freeSampleMessage
  }
  else if (feet > 400 && feet < 2000) {

    message = twentyBucksMessage

  }
  else if (feet > 2000 && feet < 2500) {
    message = thirtyBucksMessage

  }
  else if (feet > 2500) {
    message = overLimitMessage
  }

  return message
}

let nycMessage = 'Ok, sounds good.'
let notNycMessage = 'No go.'
let destination

function ternaryCheckCity(destination) {
  destination === "NYC" ? (message = nycMessage) : (message = notNycMessage);
  return message
}

function switchOnCharmFromTip(tip) {
  switch (true) {
    case tip === 'generous':
      return "Thank you so much.";
    case tip === 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}
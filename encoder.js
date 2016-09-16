function encode(message) {

  // KUDOS: http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range#answer-1527820
  /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // This is a list of characters to choose from, for the “scrambled” part of the message.
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';

 // Use this function to generate encoded / encrypted messages for you to test!
 // Written by Jim Thoburn (he posted in an issue, I just posted it here)
 
  function encodeLetter(letter) {

    // Choose a number between zero and nine.
    var number = getRandomInt(0, 9);

    // Generate a random string with that number of characters
    var filler = '';
    for (var index = 0; index < number; index++) {
      filler += alphabet[getRandomInt(0, alphabet.length - 1)];
    }

    return number + filler + letter;
  }

  var encodedMessage = '';
  for (var index = 0; index < message.length; index++) {
    // Encode the next letter
    encodedMessage += encodeLetter(message[index]);
  }

  console.log('Original message: ' + message);
  console.log('Encoded message: ' + encodedMessage);
  return encodedMessage;
}

// Try it out!
encode('Hello World');

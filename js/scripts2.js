// Business Logic
function pigLatin(word) {
  const array = word.split('');
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let firstConsonant = true;
  let secondConsonant = true;

  vowels.forEach(function(vowel) {
    if (array[0] === vowel) {
      array.push("way");
      firstConsonant = false;
    } else if (array[1] === vowel) {
      secondConsonant = false;
    }
  });

  if (array[0] === "q" && array[1] === "u") {
    array.push(array.shift());
    array.push(array.shift());
    array.push("ay");
  } else if (firstConsonant && array[1] === "q" && array[2] === "u") {
    array.push(array.shift());
    array.push("ay");
  } else if (firstConsonant && secondConsonant) {
    array.push(array.shift());
    array.push(array.shift());
    array.push("ay");
  } else if (firstConsonant) {
    array.push(array.shift());
    array.push("ay");
  }

  word = array.join("");
  console.log(word);
}
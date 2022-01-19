// Business Logic
function pigLatin(word) {
  const array = word.split('');
  const vowels = ["a", "e", "i", "o", "u"];
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

  if (firstConsonant && secondConsonant) {
    array.push(array.shift());
    array.push(array.shift());
  } else if (firstConsonant) {
    array.push(array.shift());
  }

  word = array.join("");
  console.log(word);
}
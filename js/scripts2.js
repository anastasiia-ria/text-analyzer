// Business Logic
function pigLatin(word) {
  const array = word.split('');
  const vowels = ["a", "e", "i", "o", "u"];
  let consonant = true;

  vowels.forEach(function(vowel) {
    if (array[0] === vowel) {
      array.push("way");
      consonant = false;
    } 
  });

  if (consonant) {
    array.push(array.shift());
  }

  word = array.join("");
  console.log(word);
}
// Business Logic
function pigLatin(word) {
  const array = word.split('');
  const vowels = ["a", "e", "i", "o", "u"];

  vowels.forEach(function(vowel) {
    if (array[0] === vowel) {
      array.push("way");
    }
  });
  
  word = array.join("");
  console.log(word);
}
// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if ((text.trim().length === 0 || (word.trim().length === 0))) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
}

function boldPassage(word, text) {
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
     if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
     } else {
      htmlString = htmlString.concat(element);
     }
     if (index !== (textArray.length - 1)) {
       htmlString = htmlString.concat(" ");
     }
  });
  return htmlString + "</p>";
}

function unique (item, index, inputArray ) {
  return inputArray.indexOf(item) === index;
}

function removeOffensiveWords (text) {
  const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  offensiveWords.forEach(function(offensiveWord) {
    if (text.toLowerCase().includes(offensiveWord)) {
      console.log(offensiveWord);
    }
  });
}

// UI Logic
$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);

    let multiDimArray = [];
    const wordArray = passage.toLowerCase().split(" ");
    let uniqueArray = wordArray.filter(unique);

    uniqueArray.forEach(function(word) {
      multiDimArray.push([numberOfOccurrencesInText(word, passage), word]);
    });

    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    multiDimArray.sort().reverse().slice(0,3).forEach(function(obj) {
      $('ul#count-list').append('<li>' + obj[0] + ": " + obj[1] + '</li>');
    });
  });
});


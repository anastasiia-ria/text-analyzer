# _{Application Name}_

#### By Anastasiia Riabets and Daniel Lindsey

#### _{Brief description of application}_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Tests 

Describe: wordCounter()

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0


Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"

Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p><b>hello</b> there</p>"

Describe: removeOffensiveWords()

Test: "It should return 0 for an empty string."
Code: removeOffensiveWords("");
Expected Output: 0

Test: "It should return word if the word is within the array of offensive words"
Code: 
const word = "zoinks";
removeOffensiveWords(word);
Expected Output: zoinks

Test: "It should return offensive word if the text contains it"
Code: 
const text = "zoinks hello world";
removeOffensiveWords(text);
Expected Output: zoinks

Test: "It should return offensive words if the text contains them even if it has capital letter"
Code: 
const text = "zoinks hello world Biffaroni";
removeOffensiveWords(text);
Expected Output: zoinks Biffaroni

Test: "It should return text without offensive words"
Code: 
const text = "zoinks hello world Biffaroni";
removeOffensiveWords(text);
Expected Output: hello world

Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

Test: "It will move first consonant to the end of word if the word begins with a consonant."
Code: pigLatin("qa");
Expected Output: "aq"

Test: "It will move first consequtive consonants to the end of word if the word begins with a consonant."
Code: pigLatin("sra");
Expected Output: "asr"

Test: "It will recongnize vowels regardless of case."
Code: pigLatin("Orange");
Expected Output: "Orangeway"

Test: "It will recongnize consonants regardless of case."
Code: pigLatin("Bug");
Expected Output: "ugB"

Test: "It will move first consequtive consonants and add 'ay' to the end of word if the word begins with a consonant."
Code: pigLatin("code");
Expected Output: "odecay"

Test: "It will move 'qu' and add 'ay' to the end of word if the word begins with with 'qu.'"
Code: pigLatin("quick");
Expected Output: "ickquay"

Test: "It will not move 'qu', it will move first consonant only and add 'ay' to the end of word if the word begins with with consonant + 'qu.'"
Code: pigLatin("squeal");
Expected Output: "quealsay"
## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

Copyright (c) 01/18/2022 Anastasiia Riabets and Daniel Lindsey
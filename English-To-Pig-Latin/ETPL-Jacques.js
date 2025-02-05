// TEST CASES 
// 'The quick brown fox jumps over the lazy dog.'
// Please provide a word or a sentence
// Happy  => appyhay
// Child  => Ildchay
// Awesome => Awesomeway
// "Pig Latin is hard to speak"
// => 
// Igpay Atinlay isway ardhay otay eakspay

const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 
                    'g', 'h', 'j', 'k', 
                    'l', 'm', 'n', 'p', 
                    'q', 'r', 's', 't', 
                    'v', 'w', 'x', 'y', 'z'];


const result = [];

function startsWithConsonantAndVowel(word) {
    return consonants.includes(word[0].toLowerCase()) 
    && 
    vowels.includes(word[1].toLowerCase());
}

function startsWithTwoConsonants(word){
    return consonants.includes(word[0].toLowerCase()) 
    && 
    consonants.includes(word[1].toLowerCase());
}

function startsWithAVowel(word){
    return vowels.includes(word[0].toLowerCase());
}

function startsWithCapitalLetter(word) {
    const regex = new RegExp('^[A-Z]');
    return regex.test(word);
}

function isAsingleConsonant(word){
    return consonants.includes(word.toLowerCase());
}

// Get user input
const args = process.argv.slice(2)
console.log(args);

// Valid argument
if (args.length == 0) {
    console.log("Please provide a word or a sentence");
    return;
}

// Retrieve words 
const input_arr = args[0].split(' ')
console.log(input_arr);


input_arr.forEach(element => {
    if (isAsingleConsonant(element)){
        console.log(`${element} alone cannot be used! Please provide at least two consonants`); 
        process.exit();
    }
})


input_arr.forEach(word => {

    let construct = '';
    let firstPart = '';
    let secondPart = '';

    if (startsWithConsonantAndVowel(word)){

        firstPart = word.slice(1);

        if(startsWithCapitalLetter(word)){
            firstPart = firstPart.charAt(0).toUpperCase() + firstPart.slice(1);
        }
        secondPart = word[0].toLowerCase();
        construct = firstPart + secondPart + 'ay';

        result.push(construct);
        console.log(result);
        

    }
});
// TEST CASES 
// 'The quick brown fox jumps over the lazy dog.'
// Please provide a Word or A sentence
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

// Valid argument
if (args.length == 0) {
    console.log("Please provide a word or a sentence");
    return;
}

// Retrieve words 
const input_arr = args[0].split(' ')

input_arr.forEach(element => {
    if (isAsingleConsonant(element)){
        console.log(`${element} alone cannot be used! Please provide at least two consonants`); 
        process.exit();
    }
})


for(let i = 0; i < input_arr.length; ++i){
    let construct = '';
    let firstPart = '';
    let secondPart = '';

    let word = input_arr[i];

    if (startsWithConsonantAndVowel(word)){
        // Example Happy
        firstPart = word.slice(1); // appy

        if(startsWithCapitalLetter(word)){
            // A + ppy
            firstPart = firstPart.charAt(0).toUpperCase() + firstPart.slice(1);
        }
        // h
        secondPart = word[0].toLowerCase();
        // App + h + ay
        construct = firstPart + secondPart + 'ay';

        result.push(construct);
        continue;
    }
    if (startsWithTwoConsonants(word)) {
        //Example Child
        firstPart = word.slice(2); // ild

        if(startsWithCapitalLetter(word) && (word.length == 2)) {
            result.push(word + "ay");
            continue;
        }

        if(startsWithCapitalLetter(word)){
            // I + ld
            firstPart = firstPart.charAt(0).toUpperCase() + firstPart.slice(2); 
        }

        // ch
        secondPart = word.slice(0,2).toLowerCase();
        // Ild + ch + ay
        construct = firstPart + secondPart + 'ay';

        result.push(construct);
        continue;
    }

    if (startsWithAVowel(word)) {
        construct = word + "way";
        result.push(construct);
    }
}

console.log(result.join(' '));

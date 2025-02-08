/* TEST CASES
"hello world" 3
 "Pig Latin is hard to speak" 1
"hello world" -5
*/

// Get user input
const args = process.argv.slice(2)
console.log('args', args);

// Valid arguments
if (args.length < 2 || isNaN(args[1])) {
    console.log("Please provide a phrase and a shift number");
    return;
}

const alphabet =  ['a', 'b', 'c', 'd','e', 'f', 
    'g', 'h', 'i', 'j', 'k', 
    'l', 'm', 'n', 'o', 'p', 
    'q', 'r', 's', 't', 'u',
    'v', 'w', 'x', 'y', 'z'];

const result = [];

const phrase = args[0].toLowerCase(); 

const shift_num = parseInt(args[1]);

const phrase_arr = phrase.split(' ')

for ( let i = 0; i < phrase_arr.length; ++i){
    result.push(cypherEncryption(phrase_arr[i]))
}

// Output
console.log(result.join(' '));


function cypherEncryption(word) {
    let encrypted_word = '';

    for (let i = 0; i < word.length; ++i) {

        // Get position of word character in alphabet
        let needle = alphabet.indexOf(word[i]);
        console.log("needle", needle);
        
        
        // Calculate reach  
        let goal = needle + shift_num;
        console.log("goal", goal);
        
        // handle backward move
        if (goal < 0) {
            goal = alphabet.length + goal;
        }
        
        // handle alphabet limit
        if(goal > alphabet.length) {
            goal = goal % alphabet.length;
        }
        
        encrypted_word += alphabet[goal];
    }
    return encrypted_word;
}

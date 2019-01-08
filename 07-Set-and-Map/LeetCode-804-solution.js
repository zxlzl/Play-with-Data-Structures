/**
 * @param {string[]} words
 * @return {number}
 */
const uniqueMorseRepresentations = function(words) {
    let code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let res = [];
    words.forEach((word)=>{
        let out = '';
        for(let i=0;i<word.length;i++){
            out += code[word[i].charCodeAt()-97];
        }
        if(!res.includes(out)){
            res.push(out);
        }
    })
    return res.length;
};
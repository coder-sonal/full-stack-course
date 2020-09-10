var str = "aeiou";
function vowel(string){
    var countVowel = 0;
    for (var a = 0; a <= string.length-1; a++){
        var char = string[a];
        var result = checkVowel(char);
        if (result==true){
            countVowel= countVowel+1;
        }
    }
    console.log("Count of all the vowels in the given string "+countVowel);
}
function checkVowel(alphabet){
    switch (alphabet){
        case 'a':
        case 'A': 
        case 'E':
        case 'e':
        case 'i':
        case 'I': 
        case 'O':
        case 'o':
        case 'U':
        case 'u': 
            return  true;
        default:
            return  false;
    }
}
vowel(str);


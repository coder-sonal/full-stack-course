var stringToBeChecked = "Hera Pheri"

function consonants(str){
    var index = 0;
    var consonantCount = 0
    while (index <= str.length-1){
        var char = str[index];
        var result = consonantCheck(char);
        if (result == true){
            consonantCount = consonantCount + 1;
        }
        index++
    }
    console.log("Count of all the consonants in the given string " + consonantCount);
}

function consonantCheck(alphabet){
    switch (alphabet){
        case 'b':
        case 'c':
        case 'd':
        case 'f':
        case 'g':
        case 'h':
        case 'j':
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        case 'v':
        case 'w':
        case 'x':
        case 'y':
        case 'z':
        case 'B':
        case 'C':
        case 'D':
        case 'F':
        case 'G':
        case 'H':
        case 'J':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'P':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'V':
        case 'W':
        case 'X':
        case 'Y':
        case 'Z':
            return true;
        default:
            return false;
    }
}
consonants(stringToBeChecked);
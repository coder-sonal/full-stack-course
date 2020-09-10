var string = "Arunabh Singh Thakur";
pickAlphabet(string);

function pickAlphabet(str){
    var i = 0;
    var result = "";
    for (i=0; i <= str.length-1; i++){
        var alphabet = str[i];
        result = result + searchAlphabet(alphabet);
    }
    console.log(result);
}

function searchAlphabet(alpha){
    switch (alpha){
        case 'A':
            return 'Z';
        case 'a':
            return 'z';
        case 'B':
            return 'Y';
        case 'b':
            return 'y';
        case 'C':
            return 'X';
        case 'c':
            return 'x';
        case 'D':
            return 'W';
        case 'd':
            return 'w';
        case 'E':
            return 'V';
        case 'e':
            return 'v';
        case 'F':
            return 'U';
        case 'f':
            return 'u';
        case 'G':
            return 'T';
        case 'g':
            return 't';
        case 'H':
            return 'S';
        case 'h':
            return 's';
        case 'I':
            return 'R';
        case 'i':
            return 'r';
        case 'J':
            return 'Q';
        case 'j':
            return 'q';
        case 'K':
            return 'P';
        case 'k':
            return 'p';
        case 'L':
            return 'O';
        case 'l':
            return 'o';
        case 'M':
            return 'N';
        case 'm':
            return 'n';
        case 'N':
            return 'M';
        case 'n':
            return 'm';
        case 'O':
            return 'L';
        case 'o':
            return 'l';
        case 'P':
            return 'K';
        case 'p':
            return 'k';
        case 'Q':
            return 'J';
        case 'q':
            return 'j';
        case 'R':
            return 'I';
        case 'r':
            return 'i';
        case 'S':
            return 'H';
        case 's':
            return 'h';
        case 'T':
            return 'G';
        case 't':
            return 'g';
        case 'U':
            return 'F';
        case 'u':
            return 'f';
        case 'V':
            return 'E';
        case 'v':
            return 'e';
        case 'W':
            return 'D';
        case 'w':
            return 'd';
        case 'X':
            return 'C';
        case 'x':
            return 'c';
        case 'Y':
            return 'B';
        case 'y':
            return 'b';
        case 'Z':
            return 'A';
        case 'z':
            return 'a';
        default:
            return alpha;
    }
}
function getLetter(s) {
    let letter;
    let set1 = "aeiou";
    let set2 = "bcdfg";
    let set3 = "hjklm";
    let set4 = "npqrstvwxyz";
    
    switch (true) {
        case set1.includes(s.charAt(0)):
            letter = "A";
            break;
    
        case set2.includes(s.charAt(0)):
            letter = "B";
            break;

        case set3.includes(s.charAt(0)):
            letter = "C";
            break;

        case set4.includes(s.charAt(0)):
            letter = "D";
            break;
                    
        default:
            break;
    }

    return letter;
}
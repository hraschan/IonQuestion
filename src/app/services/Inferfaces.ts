export interface Question {

    //Variablen

    id: String;                 //FragenId
    title: String;              //Frage
    a1: String;                 //Antwort 1
    a2: String;                 //Antwort 2
    a3: String;                 //Antwort 3
    a4: String;                 //Antwort 4
    correct: Number;            //Korrenkte Antwort

}

export interface Quiz {

    //variablen
    id: String;
    quizName: String;
    questions: Question[];      //Array mit mehreren Questions

}
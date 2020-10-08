import { Injectable } from '@angular/core';
import { Question, Quiz } from './Inferfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public currentQuiz: Quiz = {id: "", quizName: "Neu", questions: []};


  constructor() {
    this.currentQuiz.questions.push({
      id: "1",
      title: "Welche Farbe hat Armin?",
      a1: "Schwarz",
      a2: "Blau",
      a3: "Grün",
      a4: "Weiß",
      correct: 2
    });
   }

   public deleteQuestion(q: Question) {

   }
}

import { Injectable } from '@angular/core';
import { Question, Quiz } from './Inferfaces';
import {v4 as uuid} from "uuid";

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
   public getQuestion(id: string):Question{
    return this.currentQuiz.questions.find(q=> (q.id == id));
    
   }
   public getNewQuestion():Question{
    let question = {
      id: "",
      title: "",
      a1: "",
      a2: "",
      a3: "",
      a4: "",
      correct: 0
    }
      return question;
   }

   public addQuestion(q: Question) {
      q.id = uuid();
      this.currentQuiz.questions.push(q);
   }
  }

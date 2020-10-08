import { Injectable } from '@angular/core';
import { Question, Quiz } from './Inferfaces';
import {v4 as uuid} from "uuid";
import  {Plugins} from "@capacitor/core"
const { Storage} = Plugins;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public currentQuiz: Quiz = {id: "", quizName: "Neu", questions: []};


  constructor() {
    this.loadQuiz();
   }

   public saveQuiz() {
      Storage.set({
        key: "currentQuiz",
        value: JSON.stringify(this.currentQuiz)
      }).then(()=>{
        console.log("Then");
      }).catch((reason: any)=>{
        console.log(reason);
      });
   }

   public async loadQuiz()  {
      let obj = await Storage.get({
        key: "currentQuiz"
      })
      if(obj.value) {
        this.currentQuiz = JSON.parse(obj.value);
        if(!this.currentQuiz.quizName) console.log("Komischer Fehler");
      }else{
        console.log("wert nicht gefunden")
      }
   }

   public deleteQuestion(q: Question) {
    let index = this.currentQuiz.questions.indexOf(q)
    if(index>-1){
      this.currentQuiz.questions.splice(index, 1);
    }
    this.saveQuiz();
   }
   public getQuestion(id: string):Question{
    return this.currentQuiz.questions.find(q=> (q.id == id));
    
   }
   public getNewQuestion():Question{
    let question = {
      id: "0",
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
      console.log(q);
      this.saveQuiz();
   }
  }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Question } from 'src/app/services/Inferfaces';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

  public question: Question;
  constructor(private data:DataService, private route: ActivatedRoute) {


  }

  ngOnInit() {
    let id: string = this.route.snapshot.paramMap.get("id");

    
    if (id == "0"){ 
      this.question = this.data.getNewQuestion();
      
    }else{
      this.question = this.data.getQuestion(id);
    }
    console.log(this.question);
  }
  ionViewDidLeave() {
    //Only add question if something is written in question
    if(this.question.id == "0" && this.question.title.length>0){
      
        this.data.addQuestion(this.question);
    }
    this.data.saveQuiz();
  }
  public setCorrect(n: number) {
    this.question.correct = n;
  }
}

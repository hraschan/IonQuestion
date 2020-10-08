import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Question } from 'src/app/services/Inferfaces';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.page.html',
  styleUrls: ['./question-list.page.scss'],
})
export class QuestionListPage implements OnInit {

  public questions;
  constructor(private data:DataService, private navCTRL: NavController) { 
    this.questions = data.currentQuiz.questions;
    
  }

  ngOnInit() {
  }

  showDetails(q: Question) {
    if(q)
      this.navCTRL.navigateForward("question/" + q.id);
    else
      this.navCTRL.navigateForward("question/0");
        
  }

  deleteQuestion(q: Question) {
    this.data.deleteQuestion(q);
  }
}

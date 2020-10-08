import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.page.html',
  styleUrls: ['./question-list.page.scss'],
})
export class QuestionListPage implements OnInit {

  public questions;
  constructor(private data:DataService) { 
    this.questions = data.currentQuiz.questions;
    
  }

  ngOnInit() {
  }

  showDetails(id: string) {

  }
}

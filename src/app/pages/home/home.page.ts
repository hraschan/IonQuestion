import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public anzahl: String = "0";

  constructor(private data: DataService) {

    console.log(this.data.currentQuiz.questions.length);
    this.anzahl = this.data.currentQuiz.questions.length.toString();
  }

  showList() {
    
  }

}

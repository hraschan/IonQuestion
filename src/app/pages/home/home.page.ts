import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public anzahl: String = "0";

  constructor(private data: DataService, private navCTRL: NavController) {

    console.log(this.data.currentQuiz.questions.length);
    this.anzahl = this.data.currentQuiz.questions.length.toString();
  }

  showList() {
    this.navCTRL.navigateForward("/question-list");
  }

}

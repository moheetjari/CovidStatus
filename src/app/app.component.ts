import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CovidStatus';

  constructor(private router: Router) { }

  imagePath = "assets/image/icon.png";
  indiaCases() {
    this.router.navigate(['/india']);
  }

  allCases() {
    this.router.navigate(['/allcases']);
  }
}

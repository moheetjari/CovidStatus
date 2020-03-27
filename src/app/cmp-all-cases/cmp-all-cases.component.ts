import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';
import { NgxSpinnerService } from 'ngx-spinner'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cmp-all-cases',
  templateUrl: './cmp-all-cases.component.html',
  styleUrls: ['./cmp-all-cases.component.css']
})
export class CmpAllCasesComponent implements OnInit {

  constructor(private service: CovidServiceService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  allCases: any
  ngOnInit() {
    this.spinner.show();
    this.service.getAllCases().subscribe(data => {

      //console.log(data['countries_stat']);
      this.allCases = data['countries_stat'];
      console.log(this.allCases)
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }

  // editHandler({ dataItem }) {
  //   this.router.navigate(['/historyByCountry/' + dataItem.country_name])
  // }

}

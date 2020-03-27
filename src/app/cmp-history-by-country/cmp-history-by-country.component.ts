import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovidServiceService } from '../covid-service.service';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cmp-history-by-country',
  templateUrl: './cmp-history-by-country.component.html',
  styleUrls: ['./cmp-history-by-country.component.css']
})
export class CmpHistoryByCountryComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private service: CovidServiceService,
    private datePipe: DatePipe,
    private spinner: NgxSpinnerService) { }


  dataOfCountry: any
  sortedData = []
  temp: String
  ngOnInit() {
    this.spinner.show();
    var country = this.router.snapshot.paramMap.get('country')
    this.temp = "Cases of " + country;
    //alert(country);
    this.service.getHistoryByCountry(country).subscribe(data => {

      console.log(data['stat_by_country']);
      this.dataOfCountry = data['stat_by_country'];
      for (let i = this.dataOfCountry.length - 1; i >= 0; i--) {
        this.dataOfCountry[i].record_date = this.datePipe.transform(this.dataOfCountry[i].record_date, "dd MMM HH:mm")
        this.sortedData.push(this.dataOfCountry[i]);
      }
      console.log(this.sortedData);
      setTimeout(() => {
        this.spinner.hide();
      }, 3000);
    });
  }

}

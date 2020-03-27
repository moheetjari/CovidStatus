import { Component, OnInit } from '@angular/core';
import { CovidServiceService } from '../covid-service.service';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cmp-india',
  templateUrl: './cmp-india.component.html',
  styleUrls: ['./cmp-india.component.css']
})
export class CmpIndiaComponent implements OnInit {

  constructor(private service: CovidServiceService,
    private datePipe: DatePipe,
    private spinner: NgxSpinnerService) { }

  covid19Data: any
  fetchFlag: boolean = false;
  date: Date = new Date();
  dateDaysAgo = new Date(new Date().getTime() - 8 * 24 * 60 * 60 * 1000);

  ngOnInit() {
    //alert(this.date4DaysAgo);
    // var today=this.datePipe.transform(this.date,"yyyy-MM-dd")
    // this.service.getDataOfCorona("india",today).subscribe(data=>{
    //   console.log(data);
    // this.timeLineData=data['countrytimelinedata'];
    // this.timeLineItems=data['timelineitems'];
    // 
    // console.log(today);
    // console.log(this.timeLineItems)
    // })
  }
  tempData = []



  onChange(event) {
    this.spinner.show();
    var dt = this.datePipe.transform(event, "yyyy-MM-dd")
    this.service.getDataOfCorona("india", dt).subscribe(data => {
      this.fetchFlag = true
      this.covid19Data = data;
      //console.log(this.covid19Data);
      this.tempData.push(this.covid19Data['stat_by_country'][0]);
      console.log(this.tempData);
      if (this.fetchFlag == true) {
        this.spinner.hide();
      }
    });
    this.tempData = [];
    this.fetchFlag = false;
  }

}

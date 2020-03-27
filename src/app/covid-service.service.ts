import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      "x-rapidapi-key": "54ce04ad82msh698ef1f295e551ep1bf868jsnebef7b9b40d8"
    })
};

@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  constructor(private http: HttpClient) { }
  urlForParticularCountryByDate = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/history_by_country_and_date.php"
  urlForCasesByCountry = " https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php";
  urlForHistoryByCountry = "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php"
  getDataOfCorona(country, date) {
    return this.http.get(this.urlForParticularCountryByDate + "?country=" + country + "&date=" + date, httpOptions);
  }

  getAllCases() {
    return this.http.get(this.urlForCasesByCountry, httpOptions);
  }

  getHistoryByCountry(country) {
    return this.http.get(this.urlForHistoryByCountry + "?country=" + country, httpOptions);
  }
}

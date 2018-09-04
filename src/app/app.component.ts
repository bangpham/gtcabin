import {Component, OnInit, ViewChild} from '@angular/core';
import { VoteService } from './vote.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {google, google, google} from "@agm/core/services/google-maps-types";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;


  legendMajor = "Major";
  legendCitizenship = "Quốc tịch";
  legendRelationship = "Relationship Status"

  years: Year[] = [
    {value: '1989', viewValue: '1989'},
    {value: '1990', viewValue: '1990'},
    {value: '1991', viewValue: '1991'},
    {value: '1992', viewValue: '1992'},
    {value: '1993', viewValue: '1993'},
    {value: '1994', viewValue: '1994'},
    {value: '1995', viewValue: '1995'},
    {value: '1996', viewValue: '1996'},
    {value: '1997', viewValue: '1997'},
    {value: '1998', viewValue: '1998'},
    {value: '1999', viewValue: '1999'},
    {value: '2000', viewValue: '2000'},
    {value: '2K+', viewValue: '2k+'}
  ];

  majors: Major[] = [
    {value: 'CS', viewValue: 'CS'},
    {value: 'CM', viewValue: 'CM'},
    {value: 'ChemE.', viewValue: 'ChemE'},
    {value: 'EE.', viewValue: 'EE'},
    {value: 'ME', viewValue: 'ME'},
    {value: 'IE', viewValue: 'IE'},
    {value: 'CompE', viewValue: 'CompE'},
    {value: 'Other', viewValue: 'Other'}
  ];

  survey = {
    name: '',
    status: '',
    gender: '',
    age: 0,
    citizenship: '',
    major: '',
    quote: ''
  }

  chartdata: boolean = false;
  nameCount = [];
  nameData = [];
  statusCount = [];
  statusData = [];
  genderCount = [];
  genderData = [];
  ageCount = [];
  ageData = [];
  citizenshipCount = [];
  citizenshipData= [];
  majorCount = [];
  majorData= [];

  //Chart
  view: any[] = [600, 300];
  gridView: any[] = [600, 300];
  largeView: any[] = [700, 300];
  smallView: any[] = [600, 250];


  colorScheme = {
    domain: ['#5AA454', '#BC3C56', '#C7B42C', '#165E99', '#588CB7', '#0D4A7C']
  };

  //OPTIONS
  showLegend = true;
  showLabels = true;
  explodeSlices = true;
  doughnut = true;
  doughnutFalse = false;
  gradient = false;
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Năm sinh ';
  showYAxisLabel = true;
  yAxisLabel = 'đầu người';


  constructor(private vote: VoteService) {}

  saveEntry() {
    console.log(this.survey);
    this.vote.saveEntry(this.survey);
    this.scrollTo('.graph-1');
  }

  scrollTo(className: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnInit() {
    this.vote.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results);
    })
  }


  processData(entries) {
    this.nameData = []
    this.nameCount = [];
    this.statusCount = [];
    this.statusData = [];
    this.genderCount = [];
    this.genderData = [];
    this.ageCount = [];
    this.ageData = [];
    this.citizenshipCount = [];
    this.citizenshipData = [];
    this.majorCount = [];
    this.majorData = [];

    //Gender
    entries.forEach(element => {
      if (this.majorCount[element.major])
        this.majorCount[element.major] += 1;
      else
        this.majorCount[element.major] = 1;
    });
    for (var key in this.majorCount) {
      let singleentry = {
        name: key,
        value: this.majorCount[key]
      }
      this.majorData.push(singleentry);
    }


    //Relationship status
    entries.forEach(element => {
      if (this.statusCount[element.status])
        this.statusCount[element.status] += 1;
      else
        this.statusCount[element.status] = 1;
    });
    for (var key in this.statusCount) {
      let singleentry = {
        name: key,
        value: this.statusCount[key]
      }
      this.statusData.push(singleentry);
    }

    //Citizenship
    entries.forEach(element => {
      if (this.citizenshipCount[element.citizenship])
        this.citizenshipCount[element.citizenship] += 1;
      else
        this.citizenshipCount[element.citizenship] = 1;
    });
    for (var key in this.citizenshipCount) {
      let singleentry = {
        name: key,
        value: this.citizenshipCount[key]
      }
      this.citizenshipData.push(singleentry);
    }

    //Gender
    entries.forEach(element => {
      if (this.genderCount[element.gender])
        this.genderCount[element.gender] += 1;
      else
        this.genderCount[element.gender] = 1;
    });
    for (var key in this.genderCount) {
      let singleentry = {
        name: key,
        value: this.genderCount[key]
      }
      this.genderData.push(singleentry);
    }

    //Age
    entries.forEach(element => {
      if (this.ageCount[element.age])
        this.ageCount[element.age] += 1;
      else
        this.ageCount[element.age] = 1;
    });
    for (var key in this.ageCount) {
      let singleentry = {
        name: key,
        value: this.ageCount[key]
      }
      this.ageData.push(singleentry);
    }

    //Age
    entries.forEach(element => {
      if (this.nameCount[element.name])
        this.nameCount[element.name] += 1;
      else
        this.nameCount[element.name] = 1;
    });
    for (var key in this.nameCount) {
      let singleentry = {
        name: key,
        value: this.nameCount[key]
      }
      this.nameData.push(singleentry);
    }
  }
}

export interface Year {
  value: string;
  viewValue: string;
}

export interface Major {
  value: string;
  viewValue: string;
}


import { Component, OnInit } from '@angular/core';
import { VoteService } from './vote.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {IImage} from "ng-simple-slideshow";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  legendMajor = "Major";
  legendCitizenship = "Quốc tịch";
  legendRelationship = "Relationship Status"

  imageUrls: (string | IImage)[] = [
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/22404145_10210596031159264_184963952_o.jpg?alt=media&token=f44e4688-ca36-4faf-a064-4b2002c85cf1', caption: 'Cú', href: '#config' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/IMG_2601.JPG?alt=media&token=9285942e-f045-475e-8143-dc48fec01ce0', caption: 'anh Bồn và cái bồn', href: '#config' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/22291435_1939647496357737_6185736984346594365_o.jpg?alt=media&token=ddfbd85d-67d7-4bc7-b526-76abfa398328', caption: 'living room', href: '#config' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/22339143_1939649633024190_8014146916003366604_o.jpg?alt=media&token=d5ea6aab-b18d-4a51-a86e-de019ff9fcd1', caption: 'Thanh', href: '#config' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/22384084_1939648429690977_2093146188720706843_o.jpg?alt=media&token=b7d93ccd-fc19-4159-a6e8-0bfb9017fad3', caption: 'The lesbians', href: '#config' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/TN_Photo-1.JPG?alt=media&token=8a1624e8-54f4-4a69-8c44-9141e64c1528', caption: 'All together', href: '#config' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/TN_Photo-19.JPG?alt=media&token=b8a7d06a-9a90-4457-b166-0f2ff5772794', caption: 'Drunken unicorns', href: '#config' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/TN_Photo-27.JPG?alt=media&token=b0fd20c9-51ff-462a-8ee2-2547ee28e2f4', caption: 'Súc miệng đi ngủ', href: '#config' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/TN_Photo-3.JPG?alt=media&token=d4e9f901-ff13-4d32-9ac1-d97cfbcd9a6f', caption: 'Tien Khoa trước khi cãi nhau', href: '#config' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/TN_Photo-31.JPG?alt=media&token=10aee25c-6479-484a-aa73-8bd74132eb69', caption: 'Love at first and second ', href: '#config' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/22368774_10214565678040048_758058858_o.jpg?alt=media&token=9b8797ec-efd0-4113-b231-98d8328261d4', caption: 'Hoàng tử và cô ếch', href: '#config' },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/22425901_10210596030879257_446268355_o.jpg?alt=media&token=beb3f442-fe4e-4070-a503-f44c09a08332', caption: 'Ba bạn nữ', href: '#config'  },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/IMG_2645.JPG?alt=media&token=306e4590-0895-4aca-a8b7-c3dde0068ed6', caption: 'Thác ', href: '#config'  },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/IMG_2713.JPG?alt=media&token=a8e867b1-033c-469b-b688-82570f6abed3', caption: 'Ra trường', href: '#config'  },
    { url: 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/IMG_2686.JPG?alt=media&token=70218044-97ff-4f0c-99e3-727417241c0e', caption: 'Những cô gái với những hình thù khác nhau', href: '#config'  }
  ];

//   imgSource: String[] = [
//   "gs://gtcabin-eecbb.appspot.com/22404145_10210596031159264_184963952_o.jpg",
//   "gs://gtcabin-eecbb.appspot.com/IMG_2601.JPG",
//   "gs://gtcabin-eecbb.appspot.com/IMG_2603.JPG",
//   "gs://gtcabin-eecbb.appspot.com/IMG_2624.JPG",
//   "gs://gtcabin-eecbb.appspot.com/IMG_2645.JPG",
//   "gs://gtcabin-eecbb.appspot.com/IMG_2713.JPG"
// ];

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
    if (this.survey.name
        && this.survey.age
        && this.survey.citizenship
        && this.survey.gender
        && this.survey.major
        && this.survey.status) {
      console.log(this.survey);
      this.vote.saveEntry(this.survey);
    }
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


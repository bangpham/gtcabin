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

  PIC_OWL: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/owl.png?alt=media&token=297d7ed2-fdb1-4418-b80d-4e000f27d3f3';
  PIC_TUB: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/tub.png?alt=media&token=37f0f177-2273-4dec-8b69-0dfc7ea5729b';
  PIC_TIENKHOA: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/tienkhoa.png?alt=media&token=f211ef81-50d8-47f0-a0af-c17ed8346d9b';
  PIC_THANH: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/thanh.png?alt=media&token=a4f6fe91-aa3c-4eff-915f-fdd0393acb93';
  PIC_UNICORN: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/unicorn.png?alt=media&token=63e3e6a7-ed43-428c-ad7d-1558feee9b19';
  PIC_TRAI: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/trai.png?alt=media&token=aeb7aea8-ab38-4728-a7fa-41f7aaa8a162';
  PIC_LES: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/les.png?alt=media&token=c4ab6647-d373-46ac-9b21-87c2b347b843';
  PIC_GROUP: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/banner2.png?alt=media&token=b6d9e6bf-84ae-480d-94ec-d728cc7cd3a4';
  PIC_GRAD: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/grad.png?alt=media&token=cf612ddd-3b73-4031-97f0-d655e5d55e7d';
  PIC_GIRLS: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/girls.png?alt=media&token=da291ba7-1f48-4b0a-8e58-5c4e682ede33';
  PIC_NHAN: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/nhan.png?alt=media&token=60a6212c-d1f9-40b5-93aa-3fdd5c747ada';
  PIC_JACK: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/jack.png?alt=media&token=65c1495e-657c-49dc-820d-03f2bb063848';
  PIC_FALL: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/fall2.png?alt=media&token=bb3a5fd6-f8df-4d67-88b4-c21893f967e7';
  PIC_FALL3: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/fall3.png?alt=media&token=a15a17e4-8d58-42e3-9414-99994abbe042';
  PIC_FIRE: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/fire.png?alt=media&token=3cec0fad-599b-41ac-be21-4907eb989c7a';
  PIC_FLOWER: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/hoa.png?alt=media&token=d32c4c3d-ebc8-4768-9967-60c464e8a874';
  PIC_FROG: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/frog.png?alt=media&token=fe88c83e-cf1f-4a47-8abf-c77e1e0e6a26';
  PIC_TUB2: string = 'https://firebasestorage.googleapis.com/v0/b/gtcabin-eecbb.appspot.com/o/thanhnina.png?alt=media&token=fc7e73c7-aac6-47db-bae8-fbb5426c81d1';

  legendMajor = "Major";
  legendRelationship = "Relationship Status"

  imageUrls: (string | IImage)[] = [
    { url: this.PIC_TUB2, caption: 'Đôi khi thấy em cười vui lòng anh xao xuyến', href: '#config' },
    { url: this.PIC_OWL, caption: 'Cú', href: '#config' },
    { url: this.PIC_TUB, caption: 'anh Bồn và cái bồn', href: '#config' },
    { url: this.PIC_NHAN, caption: 'living room', href: '#config' },
    { url: this.PIC_THANH, caption: 'Thanh', href: '#config' },
    { url: this.PIC_LES, caption: 'The lesbians', href: '#config' },
    { url: this.PIC_GROUP, caption: 'All together', href: '#config' },
    { url: this.PIC_UNICORN, caption: 'Drunken unicorns', href: '#config' },
    { url: this.PIC_TRAI, caption: 'Súc miệng đi ngủ', href: '#config' },
    { url: this.PIC_TIENKHOA, caption: 'Tien Khoa trước khi cãi nhau', href: '#config' },
    { url: this.PIC_JACK, caption: 'Love at first and second ', href: '#config' },
    { url: this.PIC_FROG, caption: 'Hoàng tử và cô ếch', href: '#config' },
    { url: this.PIC_FALL, caption: 'Thác '},
    { url: this.PIC_GRAD, caption: 'Ra trường'},
    { url: this.PIC_FALL3, caption: ''},
    { url: this.PIC_FIRE, caption: ''},
    { url: this.PIC_FLOWER, caption: ''},
    { url: this.PIC_GIRLS, caption: 'Những cô gái với những hình thù khác nhau'}
  ];

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
    img: ''
  }

  surveyData;

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
  smallView: any[] = [400, 250];


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
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Năm sinh ';
  showYAxisLabel = true;
  yAxisLabel = 'đầu người';

  num = 1;


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
    this.num = 1;
    this.vote.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results);
      this.surveyData = results;
    })
  }


  scrollDown(): void {
    if (this.num === 6) {
      let e = document.querySelector("#anchor-top");
      this.num = 1;
      e.scrollIntoView({behavior: "smooth"});
    } else {
      const target = ".graph-";
      const element = document.querySelector(target.concat(this.num.toString()));
      console.log(element);
      element.scrollIntoView({behavior: "smooth"});
      this.num++;
    }
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


import { Component, OnInit } from '@angular/core';
import { VoteService } from './vote.service';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  survey = {
    status: '',
    gender: '',
    rating: 0
  }

  chartdata: boolean = false;

  statusCount = [];
  statusData = [];

  //Chart
  view: any[] = [700, 400];
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  showLabels = true;
  explodeSlices = true;
  doughnut = false;

  constructor(private vote: VoteService) {}

  saveEntry() {
    this.vote.saveEntry(this.survey);
  }

  ngOnInit() {
    this.vote.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results);
    })
  }

  onSelect(event) {
    console.log(event);
  }

  processData(entries) {
    this.statusCount = [];
    this.statusData = [];
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

  }

}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CallAPIService } from './../../services/call-api.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
searchData:any;
  constructor(private _CallAPIService:CallAPIService ,private _title:Title) {
    _title.setTitle("Site To Help")
   }
 learningOne =this._CallAPIService.learningOne;
 learningTwo =this._CallAPIService.learningTwo;
 learningThree =this._CallAPIService.learningThree;
 editors = this._CallAPIService.editors;
  youtube = this._CallAPIService.youtube;
  API= this._CallAPIService.API;
  ngOnInit(): void {
  }

}

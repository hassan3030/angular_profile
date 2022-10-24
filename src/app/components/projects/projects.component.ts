import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CallAPIService } from './../../services/call-api.service';




@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private _CallAPIService:CallAPIService ,private _title:Title) {
    _title.setTitle("Main Projects")
   }

  ngOnInit(): void {
  }
allAPI = this._CallAPIService._Projects;


}

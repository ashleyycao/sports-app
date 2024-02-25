import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.page.html',
  styleUrls: ['./choice.page.scss'],
})
export class ChoicePage implements OnInit {
  sportid:string|null=null;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  this.sportid=this.route.snapshot.paramMap.get('id');
  }

}

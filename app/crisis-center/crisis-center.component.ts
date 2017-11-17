import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `
})
export class CrisisCenterComponent implements OnInit{ 
  constructor(private route: ActivatedRoute){
      
  }
  ngOnInit(){
      this.route.data.subscribe( data => {
        console.log('name: ', data.personName);
      })
  }
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
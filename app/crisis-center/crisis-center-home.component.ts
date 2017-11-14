import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <p>Welcome to the Crisis Center</p>
    <button (click)="goToMessage($event)">send message</button>
    <button (click)="goToNotes($event)">note message</button>
  `
})
export class CrisisCenterHomeComponent {
    constructor(private route: ActivatedRoute, private router: Router){

    }

    goToMessage($event: Event){
        //this.router.navigate(['/superheroes/(notes:compose)']);
        //this.router.navigate(['/superheroes', {outlets: {notes: ['compose']}}]);   //
        this.router.navigate([ {outlets: {
          primary: 'superheroes',
          popup: ['compose']
        }
      } ]);   //
    }

    goToNotes($event: Event) {
       this.router.navigate(['/superheroes', {outlets: {notes: ['compose']}}]); 
    }
 }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
          <label>name: </label>
          <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
    `,
})

export class HeroDetailComponent implements OnInit{

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.switchMap((params: Params) => this.heroService.getHeroes)
    }

    @Input()
    hero: Hero;
}
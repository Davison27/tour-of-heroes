import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.scss'],
})
export class HeroeDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private location: Location,
    private heroService: HeroService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHeroes(id)
      .subscribe(hero => this.hero = hero);
  }
}

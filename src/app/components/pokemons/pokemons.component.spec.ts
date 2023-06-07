import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsComponent } from './pokemons.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PokemonService } from '../../services/pokemon.service';

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;
  let compiled: HTMLElement;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonsComponent],
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    });
    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();

    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the pokemon info instantly', () => {
    const dummyPokemon = {
      name: 'charizardo!!',
      sprites: {
        front_default: 'https://charizard.com/sprite.png',
      },
    };
    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/6');
    expect(request.request.method).toBe('GET');
    request.flush(dummyPokemon);
    fixture.detectChanges();
    const h2 = compiled.querySelector('h2');
    const img = compiled.querySelector('img');

    expect(h2?.textContent).toContain(dummyPokemon.name);
    expect(img?.src).toBe(dummyPokemon.sprites.front_default);
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSerieComponent } from './modifSerie.component';

describe('ModifSerieComponent', () => {
  let component: ModifSerieComponent;
  let fixture: ComponentFixture<ModifSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

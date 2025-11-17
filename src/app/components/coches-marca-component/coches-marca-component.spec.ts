import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesMarcaComponent } from './coches-marca-component';

describe('CochesMarcaComponent', () => {
  let component: CochesMarcaComponent;
  let fixture: ComponentFixture<CochesMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CochesMarcaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CochesMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

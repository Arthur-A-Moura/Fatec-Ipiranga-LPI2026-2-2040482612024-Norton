import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CestaDetalhe } from './cesta-detalhe';

describe('CestaDetalhe', () => {
  let component: CestaDetalhe;
  let fixture: ComponentFixture<CestaDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CestaDetalhe],
    }).compileComponents();

    fixture = TestBed.createComponent(CestaDetalhe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpresComponent } from './webpres.component';

describe('WebpresComponent', () => {
  let component: WebpresComponent;
  let fixture: ComponentFixture<WebpresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebpresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebpresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

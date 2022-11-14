import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdHeaderComponent } from './zd-header.component';

describe('ZdHeaderComponent', () => {
  let component: ZdHeaderComponent;
  let fixture: ComponentFixture<ZdHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZdHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZdHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

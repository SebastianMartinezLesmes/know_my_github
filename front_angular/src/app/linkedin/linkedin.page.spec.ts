import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkedinPage } from './linkedin.page';

describe('LinkedinPage', () => {
  let component: LinkedinPage;
  let fixture: ComponentFixture<LinkedinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

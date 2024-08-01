import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GitHubPage } from './git-hub.page';

describe('GitHubPage', () => {
  let component: GitHubPage;
  let fixture: ComponentFixture<GitHubPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

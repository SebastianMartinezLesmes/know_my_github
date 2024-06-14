import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrontendGraphicComponentComponent } from './frontend-graphic-component.component';

describe('FrontendGraphicComponentComponent', () => {
  let component: FrontendGraphicComponentComponent;
  let fixture: ComponentFixture<FrontendGraphicComponentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontendGraphicComponentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendGraphicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

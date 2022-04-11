import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsViewerComponent } from './models-viewer.component';

describe('ModelsViewerComponent', () => {
  let component: ModelsViewerComponent;
  let fixture: ComponentFixture<ModelsViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

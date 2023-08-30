import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameDatabindingComponent } from './username-databinding.component';

describe('UsernameDatabindingComponent', () => {
  let component: UsernameDatabindingComponent;
  let fixture: ComponentFixture<UsernameDatabindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsernameDatabindingComponent]
    });
    fixture = TestBed.createComponent(UsernameDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

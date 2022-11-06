import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleChatThreadComponent } from './single-chat-thread.component';

describe('SingleChatThreadComponent', () => {
  let component: SingleChatThreadComponent;
  let fixture: ComponentFixture<SingleChatThreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleChatThreadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleChatThreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

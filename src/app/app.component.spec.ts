import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';

import { MockHeaderComponent } from './../testing/mocks/header.mock';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
      providers: [provideHttpClient()],
    }).compileComponents();
  });

  TestBed.overrideComponent(AppComponent, {
    remove: {
      imports: [HeaderComponent],
    },
    add: {
      imports: [MockHeaderComponent],
    },
  });

  it('should render header component', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const debugEl = fixture.debugElement.query(By.css('app-header'));
    expect(debugEl).toBeTruthy();
  });
});

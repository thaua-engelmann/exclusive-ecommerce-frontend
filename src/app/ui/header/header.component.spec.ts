import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
  });

  it('should render the logo text as "Exclusive"', () => {
    const debugEl: HTMLHeadingElement = fixture.debugElement.query(
      By.css('h1'),
    ).nativeElement;
    expect(debugEl.textContent).toBe('Exclusive');
  });
});

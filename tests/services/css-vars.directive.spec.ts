import {TestBed, ComponentFixture, async} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CssVarsDirective} from './../../src/css-vars-module';
import {CssVars} from '../../src/css-vars/types';

@Component({
  template: `
      <div [css-vars]="cssVars"></div>`
})
class TestDummyComponent {
  public cssVars: CssVars = {
    '--background': '#000'
  };
}


describe('Directive: CssVars', () => {

  let fixture: ComponentFixture<TestDummyComponent>;
  let divEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestDummyComponent, CssVarsDirective]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(TestDummyComponent);
      divEl = fixture.debugElement.query(By.directive(CssVarsDirective));
    });
  }));

  it('should generate a component with a div element', () => {
    expect(divEl.nativeElement).toBeDefined();
  });

  it(`should add '--background-color' css variable with '#000' as value to the dummy component`, () => {
    fixture.detectChanges();
    expect(getComputedStyle(divEl.nativeElement).getPropertyValue('--background')).toBe('#000');
  });
});
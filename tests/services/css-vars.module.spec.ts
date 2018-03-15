import {TestBed} from '@angular/core/testing';
import {CssVarsModule} from '../../src/css-vars/css-vars.module';
import {CssVarsService} from '../../src/css-vars/service/css-vars.service';
import {CssVars} from '../../src/css-vars/types';
import {Component} from '@angular/core';

@Component({
  template: `
      <div [css-vars]="cssVars"></div>`
})
class TestDummyComponent {
  public cssVars: CssVars = {
    '--background': '#000'
  };
}

describe('Module: CssVars', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CssVarsModule.forRoot()]
    });
  });

  it(`should provide CssVars service`, () => {
    expect(TestBed.get(CssVarsService)).toBeTruthy();
  });
});

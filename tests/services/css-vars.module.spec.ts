import {inject, TestBed} from '@angular/core/testing';

import {CssVarsService} from './../../src/css-vars-module';

describe('CssVarsService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CssVarsService
      ]
    });
  });

  it('should return :root style with single variable',
    inject([CssVarsService],
      (cssVarsService: CssVarsService) => {
        expect(cssVarsService.setVariables({'--background': '#000'})).toBe(':root {--background: #000}');
      })
  );

  it('should return :root style with two variables',
    inject([CssVarsService],
      (cssVarsService: CssVarsService) => {
        expect(cssVarsService.setVariables({
          '--background': '#000',
          '--text-size': '14px'
        })).toBe(':root {--background: #000; --text-size: 14px}');
      })
  );

});

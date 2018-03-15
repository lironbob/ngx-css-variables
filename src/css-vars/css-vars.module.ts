import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CssVarsDirective} from './directive/css-vars.directive';
import {CssVarsService} from './service/css-vars.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CssVarsDirective],
  exports: [CssVarsDirective]
})
export class CssVarsModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CssVarsModule,
      providers: [CssVarsService]
    };
  }

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: CssVarsModule,
      providers: [CssVarsService]
    };
  }
}
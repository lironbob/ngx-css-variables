import {Injectable} from '@angular/core';
import {CssVars} from '../types';

@Injectable()
export class CssVarsService {

  private head: HTMLHeadElement;

  constructor() {
    this.head = document.head || document.getElementsByTagName('head')[0];
  }

  public setVariables(vars: CssVars): string {
    const style: HTMLStyleElement = document.createElement('style');
    style.type = 'text/css';

    const styles: string[] = [];
    Object.keys(vars).forEach((property: string) => {
      styles.push(`${property}: ${vars[property]}`);
    });

    const css = `:root {${styles.join('; ')}}`;

    style.appendChild(document.createTextNode(css));
    this.head.appendChild(style);
    return css;
  }

}

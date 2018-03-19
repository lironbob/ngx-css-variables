[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/lironbob/ngx-css-variables/blob/master/LICENSE.md)

# ngx-css-variables
This is the repository for ngx-css-variables.

Ngx-css-variables is a css variables module for Angular 2/4/5

## Installation
Install ngx-css-variables via NPM, using the command below.

### NPM
```shell
npm install --save ngx-css-variables
```

## Getting started
Import the `CssVarsModule` in your root application module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { CssVarsModule } from 'ngx-css-variables';

@NgModule({
  //...
  imports: [
    //...
    CssVarsModule.forRoot()
  ],
  //...
})
export class AppModule { }
```

## Use css-vars as a directive 

```typescript
import { Component, OnInit } from '@angular/core';
import { CssVars } from 'ngx-css-variables';

@Component({
    template: `<div [css-vars]="customCssVars"></div>`
    //...
})
export class CustomComponent {
    //...
    public customCssVars: CssVars;

    constructor() {
      this.customCssVars = {
        '--font-size': '12px',
        '--bg-color': '#000',
        '--text-color': '#eee'
      };
    }
}
```

## Set global css variables with css-vars service 

```typescript
import { Component, OnInit } from '@angular/core';
import { CssVarsService } from 'ngx-css-variables';

@Component({
    //...
})
export class AppComponent {
    //...

    constructor(cssService: CssVarsService) {
      cssService.setVariables({
        '--font-size': '12px',
        '--bg-color': '#000',
        '--text-color': '#eee'
      });
    }
}
```

## Directive input parameters
The ngx-css-variables input parameters are displayed below.

| Input | Required | Details |
| ---- | ---- | ---- |
| css-vars | Required | CssVars type - css key value object  |

## Contributing

* Before adding any new feature or a fix make sure to open an issue first!

Make sure you have `angular-cli` & `karma` installed globally.

```bash
$ npm install -g angular-cli karma
```

Clone the project, and install dependencies.

```bash
$ git clone https://github.com/lironbob/ngx-css-variables.git
$ npm install
```

Create a new branch

```bash
$ git checkout -b feat/someFeature
```

Add tests & make sure everything is running properly
```bash
$ npm test
```

Commit & push, and make a pull request!

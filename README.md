# ng2-context-menu
Please wait ...
Documentation is being prepared. Most probably, we will provide it by the EOD on March 24, 2017 (Indian Time Zone).

### Prerequisite 
       * Angular-cli: 1.0.0-beta.18 or higher
       * NPM : 4.0.2 or higher
       * Node: v6.9.1 or higher

### Installation
```sh
npm install ng2-context-menu  --save
        or
yarn add ng2-context-menu --save
```
### use

Developers can use this module in angular 2 projects as built-in context menu support.
Steps to use :

##### Add `Ng2ContextMenuModule` to the module in which your `component` is declared.

```js
import {Ng2ContextMenuModule} from "ng2-context-menu";

@NgModule({
 ...
  imports: [
    Ng2ContextMenuModule  // like it.
  ],
 ...
})
export class AppModule {
}

```
##### Add the following css to your component `.css` file. 
```css
:host >>> .__context-menu__ {
  display: none;
  min-height: 200px;
  width: 200px;
  background-color: beige;
  z-index: 1;
  position: fixed;
}

:host >>> .__context-menu-option {
  display: inline-block;
  vertical-align: middle;
}

:host >>> img {
  height: 30px;
  width: 30px;
}

:host >>> .__context-menu-option p {
  text-align: center;
  color: black;
  font-size: inherit;
  font-weight: 400;
  position: absolute;
  margin-left: 30px;
  width: 200px;
  margin-right: 20px;
  float: right;
}

:host >>> .__context-menu__ ul {
  list-style-type: none;
}

:host >>> .__context-menu__ ul li span {
  margin-left: 0px;
}

```
You can customize this css according to your need.

##### Add `[context-menu]` directive to the element on which you want to open context menu in your component `template`. 

```html
<!-- You can apply [context-menu] directive on any valid HTML 5 element -->
<div [context-menu]="{option: 1}"> Right Click Me To Open Context Menu </div>
<p [context-menu]="'This is a p tag.'"> Right Click Me To Open Context Menu </p>
<p [context-menu]> Right Click Me To Open Context Menu </p>
 ```
 Here, You can provide any type of information to [context-menu]. When, you will click a context menu, You can get this     information.
 
### Define context menu options 
 // To be continued ...
 
### Congrats
This is all about this module.

###### Report issues [here](https://github.com/sauravgaursmith/ng2-context-menu/issues)
###### Feel free to sent your comments, queries and suggestions at `js.tech.feedback@gmail.com`

### License

[MIT](LICENSE)

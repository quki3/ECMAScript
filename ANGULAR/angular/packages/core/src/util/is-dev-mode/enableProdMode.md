# enable Prod Mode
- Disable Angular's development mode, which turns off assertions and other checks within the framework.
```ts
let _devMode: boolean = true;
let _runModeLocked: boolean = false;

export function enableProdMode():void {
	if(_runModeLocked){
	 throw new Error('can't not enable prod modeafter plataform setup');
	 }

  // The below check is there so when ngDevMode is set via terser
  // `global['ngDevMode'] = false;` is also dropped.

  	if (typeof ngDevMode === undefined || !!ngDevMode) {
    		global['ngDevMode'] = false;
  	}

  	_devMode = false;
}

```

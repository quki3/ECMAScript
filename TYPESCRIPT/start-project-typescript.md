# init
- create the file of configuration
- `tsc --init`
- `npx typescript --init`
- this created an tsconfig.json
```ts
{
	/*to inherit settings from a general file*/
	"extends":"configs/base",
	/*for the editor to do the automatic compilation*/
	"compileOnSave":true,
	/*the below allow us configurate option for us compiler*/
	"compilerOptions":{
		/*target especifies the version of js*/
		"target":"es5",
		/*the configuration of module*/
		"module":"commonjs",
		/*enable type checking*/
		"strict":"true,
		/*delete comments*/
		"removeComments":true,
		},
	/*which directories are going to be part of the files processed by the compiler*/
	"include":[
		"src/**/*.ts"
		],
	/*which directories are going to be exclude of the files processed by the compiler*/
	"exclude":[
		"node_modules",
		"**/*.test.ts"
		]

```

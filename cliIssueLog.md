<!--
IF YOU DON'T FILL OUT THE FOLLOWING INFORMATION YOUR ISSUE MIGHT BE CLOSED WITHOUT INVESTIGATING
-->
### Bug Report or Feature Request (mark with an `x`)
```
- [X ] bug report -> please search issues before submitting
- [ ] feature request
```

### Versions.
<!--
Output from: `ng --version`.
If nothing, output from: `node --version` and `npm --version`.
  Windows (7/8/10). Linux (incl. distribution). macOS (El Capitan? Sierra?)
-->
```
@angular/cli: 1.0.0
node: 7.5.0
os: win32 x64
@angular/common: 4.1.0
@angular/compiler: 4.1.0
@angular/core: 4.1.0
@angular/forms: 4.1.0
@angular/http: 4.1.0
@angular/platform-browser: 4.1.0
@angular/platform-browser-dynamic: 4.1.0
@angular/router: 4.1.0
@angular/cli: 1.0.0
@angular/compiler-cli: 4.1.0
```

### Repro steps.
<!--
Simple steps to reproduce this bug.
Please include: commands run, packages added, related code changes.
A link to a sample repo would help too.
-->
Add a route using loadChildren string path to a module and use a variable in either an ES6 template string or concatenated string will reproduce the error when running `ng serve`
**Example**
```
const modName = 'Lazy';

const appRoutes: Routes = [
  { path: '', component: SecondComponent },
  {
    path: 'lazyMod',
    loadChildren: 'app/' + modName.toLowerCase() + '-mod/lazy-mod.module#' + modName + 'ModModule'
  }
];
```
Replacing the ES6 template string or concatenated string with `loadChildren: 'app/lazy-mod/lazy-mod.module#LazyModModule` will load the module as expected.

### The log given by the failure.
<!-- Normally this include a stack trace and some more information. -->
```
ERROR Error: Uncaught (in promise): Error: Cannot find module 'app/lazy-mod/lazy-mod.module'.
Error: Cannot find module 'app/lazy-mod/lazy-mod.module'.
    at webpackEmptyContext (src async:2) [angular]
    at SystemJsNgModuleLoader.loadAndCompile (core.es5.js:5870) [angular]
    at SystemJsNgModuleLoader.load (core.es5.js:5858) [angular]
    at RouterConfigLoader.loadModuleFactory (router.es5.js:3324) [angular]
    at RouterConfigLoader.load (router.es5.js:3308) [angular]
    at MergeMapSubscriber.project (router.es5.js:1562) [angular]
    at MergeMapSubscriber._tryNext (mergeMap.js:120) [angular]
    at MergeMapSubscriber._next (mergeMap.js:110) [angular]
    at MergeMapSubscriber.Subscriber.next (Subscriber.js:89) [angular]
    at ScalarObservable._subscribe (ScalarObservable.js:49) [angular]
    at ScalarObservable.Observable._trySubscribe (Observable.js:57) [angular]
    at ScalarObservable.Observable.subscribe (Observable.js:45) [angular]
    at MergeMapOperator.call (mergeMap.js:85) [angular]
    at Observable.subscribe (Observable.js:42) [angular]
    at webpackEmptyContext (src async:2) [angular]
    at SystemJsNgModuleLoader.loadAndCompile (core.es5.js:5870) [angular]
    at SystemJsNgModuleLoader.load (core.es5.js:5858) [angular]
    at RouterConfigLoader.loadModuleFactory (router.es5.js:3324) [angular]
    at RouterConfigLoader.load (router.es5.js:3308) [angular]
    at MergeMapSubscriber.project (router.es5.js:1562) [angular]
    at MergeMapSubscriber._tryNext (mergeMap.js:120) [angular]
    at MergeMapSubscriber._next (mergeMap.js:110) [angular]
    at MergeMapSubscriber.Subscriber.next (Subscriber.js:89) [angular]
    at ScalarObservable._subscribe (ScalarObservable.js:49) [angular]
    at ScalarObservable.Observable._trySubscribe (Observable.js:57) [angular]
    at ScalarObservable.Observable.subscribe (Observable.js:45) [angular]
    at MergeMapOperator.call (mergeMap.js:85) [angular]
    at Observable.subscribe (Observable.js:42) [angular]
    at resolvePromise (zone.js:710) [angular]
    at resolvePromise (zone.js:681) [angular]
    at :4200/polyfills.bundle.js:3415:17 [angular]
    at Object.onInvokeTask (core.es5.js:4116) [angular]
    at drainMicroTaskQueue (zone.js:591) [<root>]
    at HTMLAnchorElement.ZoneTask.invoke (zone.js:464) [<root>]
```

### Desired functionality.
<!--
What would like to see implemented?
What is the usecase?
-->
The loadChildren property should take a string, concatenated string or an ES6 template string.

### Mention any other details that might be useful.
<!-- Please include a link to the repo if this is related to an OSS project. -->
If you load the demo app with the `loadChildren: 'app/lazy-mod/lazy-mod.module#LazyModModule` string to begin. You will need to stop `ng serve`, clear the cache on the browser (I was using Chrome) change to the template string then restart `ng serve` to reproduce the error.

This also may be linked to issue #5981 as it is producing similar error output.
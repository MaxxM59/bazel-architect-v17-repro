# Purpose

Repro that architect fails on 17.3.X

[Working 17.0.1 version](https://github.com/MaxxM59/bazel-architect-v17-repro-17.0)

# Changes

## Dependencies
- Update latest angular dependencies
- Add @angular/material

## Code
- Add peerDependencies to libraries
- Modify angular.json to use application builder and jest 
- Remove karma from deps
- Remove dragula from application
- Update tsconfigs to remove warning (es2020 -> es2022 etc.)
- Update rules_js to 1.41

# Issues

## Build

Run `bazel build  //:app  > build.log 2>&1`

Output in ./build.log: 

```console
angular:build: ✘ [ERROR] Error: The "path" argument must be of type string. Received undefined
  ╷
1 │ @use '@angular/material' as mat;
  │ ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  ╵
  src/styles.scss 1:1  root stylesheet [plugin angular-sass]

    angular:styles/global:styles:1:8:
      1 │ @import 'src/styles.scss';
        ╵         ~~~~~~~~~~~~~~~~~


cFAILURE
Result: {
    "success": false,
    "target": {
        "project": "angular",
        "target": "build"
    }
}
```

## Test
Run `bazel test  //:test  > test.log 2>&1`

Output in ./test.log: 

```console
● Validation Error:

  Directory dist/test-out/browser in the rootDir option was not found.

  Configuration Documentation:
  https://jestjs.io/docs/configuration

FAILURE
Result: {
    "success": false,
    "target": {
        "project": "angular",
        "target": "test"
    }
}
```

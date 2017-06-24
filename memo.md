# 목표 

react toolbox을 통해 블로그 레이아웃을 만든다. 

# webpack, reacct, ES5, 각종 플러그인들 사용법도 익힐수 있다. 

https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel
위를 참조하여 초기 설정을 했다.

yarn start시 이렇게 됨 

```
$ yarn start
yarn start v0.24.5
$ webpack-dev-server
Project is running at http://localhost:8080/
webpack output is served from /
Hash: 2a6b5f9231b0a9053ec7
Version: webpack 2.6.1
Time: 4107ms
     Asset       Size  Chunks                    Chunk Names
bundled.js    1.05 MB       0  [emitted]  [big]  main
index.html  221 bytes          [emitted]
chunk    {0} bundled.js (main) 1.01 MB [entry] [rendered]
   [99] ./~/react/react.js 56 bytes {0} [built]
  [115] ./src/entry.js 482 bytes {0} [built]
  [116] (webpack)-dev-server/client?http://localhost:8080 5.68 kB {0} [built]
  [119] ./src/components/App.jsx 2.35 kB {0} [built]
  [121] ./~/events/events.js 8.33 kB {0} [built]
  [136] ./~/html-entities/index.js 231 bytes {0} [built]
  [142] ./~/punycode/punycode.js 14.7 kB {0} [built]
  [147] ./~/react-dom/index.js 59 bytes {0} [built]
  [161] ./~/react-dom/lib/ReactDOM.js 5.14 kB {0} [built]
  [258] ./~/strip-ansi/index.js 161 bytes {0} [built]
  [259] ./~/url/url.js 23.3 kB {0} [built]
  [261] (webpack)-dev-server/client/overlay.js 3.73 kB {0} [built]
  [262] (webpack)-dev-server/client/socket.js 897 bytes {0} [built]
  [264] (webpack)/hot/emitter.js 77 bytes {0} [built]
  [265] multi (webpack)-dev-server/client?http://localhost:8080 ./src/entry.js 40 bytes {0} [built]
     + 251 hidden modules
Child html-webpack-plugin for "index.html":
    chunk    {0} index.html 541 kB [entry] [rendered]
        [0] ./~/lodash/lodash.js 540 kB {0} [built]
        [1] ./~/html-webpack-plugin/lib/loader.js!./src/index.html 542 bytes {0} [built]
        [2] (webpack)/buildin/global.js 509 bytes {0} [built]
        [3] (webpack)/buildin/module.js 517 bytes {0} [built]
webpack: Compiled successfully.
```

log들 


$ yarn add react-toolbox
yarn add v0.24.5
[1/4] Resolving packages...
[2/4] Fetching packages...
warning fsevents@1.1.1: The platform "win32" is incompatible with this module.
info "fsevents@1.1.1" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 12 new dependencies.
├─ chain-function@1.0.0
├─ classnames@2.2.5
├─ dom-helpers@3.2.1
├─ hoist-non-react-statics@1.2.0
├─ invariant@2.2.2
├─ prop-types@15.5.10
├─ ramda@0.23.0
├─ react-css-themr@2.1.2
├─ react-style-proptype@3.0.0
├─ react-toolbox@2.0.0-beta.12
├─ react-transition-group@1.2.0
└─ warning@3.0.0
Done in 8.72s.






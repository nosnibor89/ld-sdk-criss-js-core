:robot: I have created a release *beep* *boop*
---


<details><summary>akamai-edgeworker-sdk-common: 3.0.0</summary>

## [3.0.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/akamai-edgeworker-sdk-common-v2.0.7...akamai-edgeworker-sdk-common-v3.0.0) (2025-05-26)


### � BREAKING CHANGES

* Replace prefetch behavior with simple TTL cache ([#786](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/786))
* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293))

### Features

* Add cacheTtlMs option ([#760](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/760)) ([4f961dd](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4f961dd16fd10f5bb55dd2116d26b218944bfeb2))
* Add support for conditional event source capabilities. ([#577](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/577)) ([fe82500](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Allow specifying the user agent per-sdk implementation. ([#226](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/226)) ([e57716f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e57716f3f6f0ba8568e32b0937903ca46e5470ad))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/620)) ([3e6d404](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293)) ([c66aa6e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c66aa6ea0d12e1e4e565cb8378d367c31fab9c1b))
* React-native support for auto-env attributes. ([#357](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/357)) ([deea99c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/deea99ca2fbb3865f2ce55a83b2cf12e0ae2db5e))
* Replace prefetch behavior with simple TTL cache ([#786](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/786)) ([48b48cf](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/48b48cf69d518dc70a557ffd1dfb0209aee0b124))
* Switch to es2017 target to ensure native async/await. ([#231](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/231)) ([a83e4e6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a83e4e62d04c66105a1b0e8893640a7ca2d641e4))


### Bug Fixes

* Fix issue that caused the feature store get function impl to be called twice ([#178](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/178)) ([68f1c78](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/68f1c784c2481f7c5dead9d13b8e16a54048aaa1))
* Fix typescript exports for both cjs and es modules ([21ea133](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/21ea13322b6d69f9baaaddf0d19c311296fc5389))
* Log errors when there is no error event handler. ([#495](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/495)) ([6b73699](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6b73699061efa46cd291756d3932fcf78d480f40))
* Use clientSideAvailability instead of clientSide for filtering client side flags. ([#270](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/270)) ([2702342](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/27023429d36986466cda46aa4d95eb01c10cd455))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from ^2.15.2 to ^3.0.0
</details>

<details><summary>akamai-server-base-sdk: 4.0.0</summary>

## [4.0.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/akamai-server-base-sdk-v3.0.7...akamai-server-base-sdk-v4.0.0) (2025-05-26)


### � BREAKING CHANGES

* Replace prefetch behavior with simple TTL cache ([#786](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/786))
* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293))

### Features

* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293)) ([c66aa6e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c66aa6ea0d12e1e4e565cb8378d367c31fab9c1b))
* React-native support for auto-env attributes. ([#357](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/357)) ([deea99c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/deea99ca2fbb3865f2ce55a83b2cf12e0ae2db5e))
* Release v1.0.0 of Akamai SDKs ([#196](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/196)) ([7f8c827](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/7f8c827c71ac7744b88dc849325e95db8144892f))
* Replace prefetch behavior with simple TTL cache ([#786](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/786)) ([48b48cf](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/48b48cf69d518dc70a557ffd1dfb0209aee0b124))
* Switch to es2017 target to ensure native async/await. ([#231](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/231)) ([a83e4e6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a83e4e62d04c66105a1b0e8893640a7ca2d641e4))


### Bug Fixes

* Fix issue that caused the feature store get function impl to be called twice ([#178](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/178)) ([68f1c78](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/68f1c784c2481f7c5dead9d13b8e16a54048aaa1))
* Fix typescript exports for both cjs and es modules ([21ea133](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/21ea13322b6d69f9baaaddf0d19c311296fc5389))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/akamai-edgeworker-sdk-common bumped from ^2.0.7 to ^3.0.0
    * @launchdarkly/js-server-sdk-common bumped from ^2.15.2 to ^3.0.0
</details>

<details><summary>akamai-server-edgekv-sdk: 1.5.0</summary>

## [1.5.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/akamai-server-edgekv-sdk-v1.4.9...akamai-server-edgekv-sdk-v1.5.0) (2025-05-26)


### Features

* Add cacheTtlMs option ([#760](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/760)) ([4f961dd](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4f961dd16fd10f5bb55dd2116d26b218944bfeb2))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/620)) ([3e6d404](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* React-native support for auto-env attributes. ([#357](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/357)) ([deea99c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/deea99ca2fbb3865f2ce55a83b2cf12e0ae2db5e))
* Release v1.0.0 of Akamai SDKs ([#196](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/196)) ([7f8c827](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/7f8c827c71ac7744b88dc849325e95db8144892f))
* Switch to es2017 target to ensure native async/await. ([#231](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/231)) ([a83e4e6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a83e4e62d04c66105a1b0e8893640a7ca2d641e4))
* Upgrade edgekv bundled files to 0.6.3 ([#610](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/610)) ([58dfec6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/58dfec68c268390852cc511191c7f9b47ec3e668))


### Bug Fixes

* Fix issue that caused the feature store get function impl to be called twice ([#178](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/178)) ([68f1c78](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/68f1c784c2481f7c5dead9d13b8e16a54048aaa1))
* Fix typescript exports for both cjs and es modules ([21ea133](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/21ea13322b6d69f9baaaddf0d19c311296fc5389))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/akamai-edgeworker-sdk-common bumped from ^2.0.7 to ^3.0.0
    * @launchdarkly/js-server-sdk-common bumped from ^2.15.2 to ^3.0.0
</details>

<details><summary>browser-telemetry: 2.0.0</summary>

## [2.0.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/browser-telemetry-v1.0.8...browser-telemetry-v2.0.0) (2025-05-26)


### � BREAKING CHANGES

* Updated AI config interface. ([#697](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/697))

### Features

* 1.0 Release for browser-telemetry. ([#781](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/781)) ([681e423](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/681e4230efb99abb1acb51de3a7d0265fddcd6e0))
* Add basic logging support for browser-telemetry. ([#736](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/736)) ([2ef1486](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/2ef14868ce581afbc5257448da13414a5ba1c100))
* Add browser telemetry options. ([#675](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/675)) ([c8352b2](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c8352b21b678bb8f1063bb0c9df2e795c6cec8d5))
* Add browser-telemetry API types. ([#669](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/669)) ([89967ee](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/89967eec67da13951837f19b7671647fb96b2c8c))
* Add DOM collectors. ([#672](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/672)) ([4473a06](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4473a06145b09205f1b03d31a2215b9c3b6d75c2))
* Add http collectors. ([#673](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/673)) ([6e60ddc](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6e60ddc6932341ace2d16ace688d7774bc6340d4))
* Add singleton support for browser-telemetry. ([#739](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/739)) ([68a3b87](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/68a3b87fcc9600a7f64e7e2e1a15c12b9c370f25))
* Add stack trace parsing. ([#676](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/676)) ([ca1dd49](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/ca1dd49e596c73e807388cefcae36e956b3477a0))
* Add support for breadcrumb filtering. ([#733](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/733)) ([5c327a1](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/5c327a1c42625ec606a8599f59d58a1686f050e1))
* Add support for filtering username/password URL authority. ([#751](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/751)) ([62ab9fb](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/62ab9fb774847b5d953041f29b5f997629f86fa7))
* Add support for the session init event. ([#738](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/738)) ([320c07d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/320c07d852a8902523c290a5249f92efffd89dde))
* Add the ability to filter errors. ([#743](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/743)) ([5cffb2b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/5cffb2b5216f94941498ebb6bb783d0a8841d566))
* Implement browser telemetry client. ([#691](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/691)) ([db74a99](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/db74a99c736c00521f317c1fcddb2d1038c01c1c))
* Make browser-telemetry specific inspector type. ([#741](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/741)) ([14ecdb3](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/14ecdb3570b04ee26c38f361bfa2db948c843fef))
* Option to disable all breadcrumbs and stack. ([#770](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/770)) ([2c51838](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/2c51838f84a6c21ab38b12d960117d8ed801a114))
* Random uuid for telemetry package. ([#689](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/689)) ([4cf34f9](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4cf34f94f9d1a1949462187d09e7d84b096edb15))
* Source maps with inline sources for browser-telemetry. ([#735](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/735)) ([1656a85](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1656a856e412a661af26ed08620aebedf2064ae1))
* Updated AI config interface. ([#697](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/697)) ([cd72ea8](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/cd72ea8193888b0635b5beffa0a877b18294777e))
* Vendor TraceKit ([#729](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/729)) ([d1b364e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/d1b364eaf08502b8b7d65c124833b617577fd081))


### Bug Fixes

* Clear pending events buffer when registered. ([#727](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/727)) ([b6ad7df](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/b6ad7dfe1e16122ca16b6304e1a7b1c362cf2156))
* Fix a bug where the incorrect src lines may have been captured. ([#792](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/792)) ([1f44dd5](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1f44dd5bad3cc108beda5fb23d9b2b540812e7e6))
* Fix breadcrumb filter option parsing. ([#742](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/742)) ([833f4ce](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/833f4ce18b53c31a042316768cfeb4118746857e))
* Fix issue processing URLs for fetch and XHR requests. ([#783](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/783)) ([32cec6a](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/32cec6af00384e7496832ba87a3005b26558c528))
* Fix race condition with client registration. ([#750](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/750)) ([d2ac2e2](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/d2ac2e230118b573b4e90b5781350067c7920fcf))
* Remove BrowserTelemetry until more types are available. ([#671](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/671)) ([796b8a3](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/796b8a379e23b3345b1b5db3e324372570993603))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/js-client-sdk bumped from 0.7.0 to 0.8.0
</details>

<details><summary>cloudflare-server-sdk: 2.8.0</summary>

## [2.8.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/cloudflare-server-sdk-v2.7.7...cloudflare-server-sdk-v2.8.0) (2025-05-26)


### Features

* Add TTL caching for data store ([#801](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/801)) ([c1de485](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c1de4850c81dff8ad52276c2bfc2a2aeb87bd2d9))
* Allow specifying the user agent per-sdk implementation. ([#226](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/226)) ([e57716f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e57716f3f6f0ba8568e32b0937903ca46e5470ad))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/620)) ([3e6d404](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* edge sdks should send events to bulk/environment endpoint ([#256](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/256)) ([f45910f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/f45910f171d434ca080bb6486331fbfbd2793985))
* JSR support for Cloudflare SDK. ([#415](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/415)) ([30866f3](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/30866f34a41b74e2cf08457f2382c647bc37bd64))
* React-native support for auto-env attributes. ([#357](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/357)) ([deea99c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/deea99ca2fbb3865f2ce55a83b2cf12e0ae2db5e))
* rollup cloudflare sdk ([#279](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/279)) ([7af4f6e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/7af4f6e2d029b87396087d96904cdfa7d39a8cb3))
* Switch to es2017 target to ensure native async/await. ([#231](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/231)) ([a83e4e6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a83e4e62d04c66105a1b0e8893640a7ca2d641e4))


### Bug Fixes

* cloudflare-server-sdk exports to support using migrations ([#854](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/854)) ([3366775](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/33667756b9aef26ad10062f02299597aa5552ac1))
* Include name and version in platform. ([#453](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/453)) ([3b4e212](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3b4e212a563e5dc8b4953fadb6b31160076ec001))
* Remove bundled dependency from package.json. ([#711](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/711)) ([0fb5375](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/0fb5375443a5137c3588d454465794eb530cb982))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common-edge bumped from 2.6.6 to 3.0.0
</details>

<details><summary>fastly-server-sdk: 0.2.0</summary>

## [0.2.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/fastly-server-sdk-v0.1.7...fastly-server-sdk-v0.2.0) (2025-05-26)


### Features

* Add Fastly Edge SDK ([#723](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/723)) ([02e0eee](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/02e0eeea8678e66911eb28c5ccca59e4956a1457))


### Bug Fixes

* Remove logging of SDK option configurations ([#806](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/806)) ([a76d196](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a76d19690a7ef5932c36bfc974affc0a192c2d4f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.15.2 to 3.0.0
</details>

<details><summary>jest: 0.1.0</summary>

## [0.1.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/jest-v0.1.7...jest-v0.1.0) (2025-05-26)


### Features

* Implement jest mocks for react-native. ([#535](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/535)) ([aee09c8](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/aee09c87e1810795108157dcd9ab8cfb9fe05020))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/react-native-client-sdk bumped from ~10.10.2 to ~10.11.0
</details>

<details><summary>js-client-sdk: 0.8.0</summary>

## [0.8.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/js-client-sdk-v0.7.0...js-client-sdk-v0.8.0) (2025-05-26)


### Features

* Add a module for increased backward compatibility. ([#637](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/637)) ([44a2237](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/44a223730fed10fbd75e8de7c87c63570774fe96))
* Add basic secure mode support for browser SDK. ([#598](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/598)) ([3389983](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/33899830781affbe986f3bb9df35e5c908884f99))
* Add bootstrap support. ([#600](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/600)) ([4e5dbee](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4e5dbee48d6bb236b5febd872c910e809058a012))
* Add browser info. ([#576](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/576)) ([a2f4398](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a2f439813171527e05f5863afbda3fcb93fedb47))
* Add client-side SDK plugin support. ([#834](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/834)) ([a843a33](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a843a33e97dcab706a0034bd1fd1e3d2f78a9262))
* Add ESM support for common and common-client (rollup) ([#604](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/604)) ([8cd0cdc](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8cd0cdce988f606b1efdf6bfd19484f6607db2e5))
* Add support for browser contract tests. ([#582](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/582)) ([38f081e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/38f081ebf04c68123cf83addefbcbfec692cac16))
* Add support for client-side prerequisite events. ([#606](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/606)) ([8c84e01](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8c84e0149a5621c6fcb95f2cfdbd6112f3540191))
* Add support for hooks. ([#605](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/605)) ([04d347b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/04d347b25e01015134a2545be22bfd8b1d1e85cc))
* Add support for inspectors. ([#625](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/625)) ([a986478](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a986478ed8e39d0f529ca6adec0a09b484421390))
* Add support for localStorage for the browser platform. ([#566](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/566)) ([4792391](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4792391d1ae06f5d5afc7f7ab56608df6b1909c4))
* Add support for per-context summary events. ([#859](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/859)) ([c9fa5c4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c9fa5c45f3ac2cbaad2f2e6312d5231c3f671d98))
* Add URLs for custom events and URL filtering. ([#587](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/587)) ([7131e69](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/7131e6905f19cc10a1374aae5e74cec66c7fd6de))
* Add visibility handling to allow proactive event flushing. ([#607](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/607)) ([819a311](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/819a311db6f56e323bb84c925789ad4bd19ae4ba))
* adds datasource status to sdk-client ([#590](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/590)) ([6f26204](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6f262045b76836e5d2f5ccc2be433094993fcdbb))
* adds ping stream support ([#624](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/624)) ([dee53af](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/dee53af9312b74a70b748d49b2d2911d65333cf3))
* Adds support for REPORT. ([#575](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/575)) ([916b724](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/916b72409b63abdf350e70cca41331c4204b6e95))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/620)) ([3e6d404](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Browser-SDK Automatically start streaming based on event handlers. ([#592](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/592)) ([f2e5cbf](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/f2e5cbf1d0b3ae39a95881fecdcbefc11e9d0363))
* Enable source maps with inlined sources for browser SDK. ([#734](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/734)) ([c2a87b1](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c2a87b11d1eeb31bf0423e3d7dfc8e99fc940c99))
* Enhance basic logger destination support. ([#650](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/650)) ([21670c4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/21670c4acd629f7ccfeb7abbe94fe89723533600))
* Implement browser crypto and encoding. ([#574](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/574)) ([e763e5d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e763e5d2e53329c0f86b93544af85ca7a94e7936))
* Implement goals for client-side SDKs. ([#585](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/585)) ([fd38a8f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fd38a8fa8560dad0c6721c2eaeed2f3f5c674900))
* Implement support for browser requests. ([#578](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/578)) ([887548a](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/887548a29e22a618d44a6941c175f33402e331bf))
* Refactor data source connection handling. ([#591](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/591)) ([53f5bb8](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/53f5bb89754ff05405d481a959e75742fbd0d0a9))
* Refine CJS/ESM build configuration for browser SDK. ([#640](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/640)) ([ec4377c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/ec4377cc2afc62455aba769c20f3831cccd50250))
* Scaffold browser client. ([#579](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/579)) ([0848ab7](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/0848ab790903f8fcdc717de6c426e4948abe51c4))
* Support inline context for custom and migration events ([#810](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/810)) ([6aadf04](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6aadf0463968f89bc3df10023267244c2ade1b31))


### Bug Fixes

* Client SDKs should use wrapper information. ([#836](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/836)) ([1e0cf6a](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1e0cf6a0f77f8cfe6a7a0e675fc6490ea52a5b07))
* Consolidate common exports between base package and compat package. ([#674](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/674)) ([f692050](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/f69205082d83318e2772d027d6ea533de3ce5eb1))
* Do not mangle _meta. ([#622](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/622)) ([f6fc40b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/f6fc40bc518d175d18d556b8c22e3c924ed25bbd))
* Ensure browser contract tests run during top-level build. ([#589](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/589)) ([7dfb14d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/7dfb14de1757b66d9f876b25d4c1262e8f8b70c9))
* Ensure client logger is always wrapped in a safe logger. ([#599](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/599)) ([980e4da](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/980e4daaf32864e18f14b1e5e28e308dff0ae94f))
* Ensure streaming connection is closed on SDK close. ([#774](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/774)) ([f58e746](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/f58e746a089fb0cd5f6169f6c246e1f6515f5047))
* Export correct options for compat. ([#678](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/678)) ([8d8250c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8d8250cafb20b60e45ac3661fd8b079cb62fb83e))
* Export LDInspection interface. ([#653](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/653)) ([7f58b2a](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/7f58b2aa947f85c5b3c2462882ccb52a9dbb8ce5))
* Export required types from compat. ([#645](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/645)) ([008dcf0](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/008dcf0e7693b47d2079badad5ba038c0f9e82fe))
* Handle default flush interval for browser SDK. ([#822](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/822)) ([2c1cc7a](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/2c1cc7a117fd011a329dfcc5332fddf7fd11eff9))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-client-sdk-common bumped from 1.14.0 to 2.0.0
</details>

<details><summary>js-client-sdk-common: 2.0.0</summary>

## [2.0.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/js-client-sdk-common-v1.14.0...js-client-sdk-common-v2.0.0) (2025-05-26)


### � BREAKING CHANGES

* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293))

### Features

* Add a module for increased backward compatibility. ([#637](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/637)) ([44a2237](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/44a223730fed10fbd75e8de7c87c63570774fe96))
* Add basic secure mode support for browser SDK. ([#598](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/598)) ([3389983](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/33899830781affbe986f3bb9df35e5c908884f99))
* Add bootstrap support. ([#600](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/600)) ([4e5dbee](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4e5dbee48d6bb236b5febd872c910e809058a012))
* Add client-side SDK plugin support. ([#834](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/834)) ([a843a33](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a843a33e97dcab706a0034bd1fd1e3d2f78a9262))
* Add connection mananger. ([#522](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/522)) ([5bf8b16](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/5bf8b16e26e7d8cbbd18524f1c13f773de457b82))
* Add ESM support for common and common-client (rollup) ([#604](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/604)) ([8cd0cdc](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8cd0cdce988f606b1efdf6bfd19484f6607db2e5))
* Add hook support for the track series. ([#827](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/827)) ([1519cb9](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1519cb98b55f4e6a391da7adefddd8ac90e9258c))
* Add identify timeout to client-sdk. ([#420](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/420)) ([5d73dfe](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/5d73dfeb0d5cdacf620e65e214dd2e334363490e))
* Add platform support for async hashing. ([#573](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/573)) ([9248035](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/9248035a88fba1c7375c5df22ef6b4a80a867983))
* Add support for client-side prerequisite events. ([#606](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/606)) ([8c84e01](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8c84e0149a5621c6fcb95f2cfdbd6112f3540191))
* Add support for conditional event source capabilities. ([#577](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/577)) ([fe82500](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Add support for hooks. ([#605](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/605)) ([04d347b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/04d347b25e01015134a2545be22bfd8b1d1e85cc))
* Add support for inspectors. ([#625](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/625)) ([a986478](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a986478ed8e39d0f529ca6adec0a09b484421390))
* Add support for Payload Filtering ([#551](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/551)) ([6f44383](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6f4438323baed802d8f951ac82494e6cfa9932c5))
* Add support for per-context summary events. ([#859](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/859)) ([c9fa5c4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c9fa5c45f3ac2cbaad2f2e6312d5231c3f671d98))
* Add URLs for custom events and URL filtering. ([#587](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/587)) ([7131e69](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/7131e6905f19cc10a1374aae5e74cec66c7fd6de))
* Add visibility handling to allow proactive event flushing. ([#607](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/607)) ([819a311](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/819a311db6f56e323bb84c925789ad4bd19ae4ba))
* adds datasource status to sdk-client ([#590](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/590)) ([6f26204](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6f262045b76836e5d2f5ccc2be433094993fcdbb))
* adds ping stream support ([#624](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/624)) ([dee53af](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/dee53af9312b74a70b748d49b2d2911d65333cf3))
* adds support for individual flag change listeners ([#608](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/608)) ([da31436](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/da3143654331d7d2fd8ba76d9d995855dbf6c7a1))
* Adds support for REPORT. ([#575](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/575)) ([916b724](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/916b72409b63abdf350e70cca41331c4204b6e95))
* Allow using custom user-agent name. ([#580](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/580)) ([ed5a206](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/ed5a206c86f496942664dd73f6f8a7c602a1de28))
* Allow waiting for the network response on identify. ([#548](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/548)) ([1375660](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1375660afe39204205344e62ffc1ba3fbcce3950))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/620)) ([3e6d404](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Browser-SDK Automatically start streaming based on event handlers. ([#592](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/592)) ([f2e5cbf](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/f2e5cbf1d0b3ae39a95881fecdcbefc11e9d0363))
* Correct client evaluation typings. ([#554](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/554)) ([64ab88d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/64ab88d278308564b4cd7b6433870c7adb09142a))
* Enhance basic logger destination support. ([#650](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/650)) ([21670c4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/21670c4acd629f7ccfeb7abbe94fe89723533600))
* Implement common client side support for auto environment attributes. ([#356](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/356)) ([8d80259](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8d80259f7379827e46bef8bcf8293e3b2d966d25))
* Implement goals for client-side SDKs. ([#585](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/585)) ([fd38a8f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fd38a8fa8560dad0c6721c2eaeed2f3f5c674900))
* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293)) ([c66aa6e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c66aa6ea0d12e1e4e565cb8378d367c31fab9c1b))
* Implement polling support. ([#524](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/524)) ([a99048e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a99048e0cebaafd536f79114c4727524b8f7357d))
* Make timeout optional in LDIdentifyOptions. ([#552](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/552)) ([fa247b2](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fa247b2db821d11c8360752ba5f28b4ecff493c7))
* React Native SDK major release. ([#369](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/369)) ([1d5ca40](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1d5ca40888c4db4bb938884ca55732750fb10614))
* React-native support for auto-env attributes. ([#357](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/357)) ([deea99c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/deea99ca2fbb3865f2ce55a83b2cf12e0ae2db5e))
* Refactor application state handling. ([#523](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/523)) ([f5b81e6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/f5b81e6fc571dc9d97a18d07f382c77cd938fd65))
* Refactor data source connection handling. ([#591](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/591)) ([53f5bb8](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/53f5bb89754ff05405d481a959e75742fbd0d0a9))
* refactors the implementation of context caching.  You can now s& ([#531](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/531)) ([8ab2ee4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8ab2ee425a35350a4f1c50e608c39fa3527da513))
* Remove event target shim. ([#545](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/545)) ([448ad67](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/448ad67815b9ec29abd322ed8483b2367147b146)), closes [#412](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/412)
* Remove mock fetch from mocks. ([#525](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/525)) ([fa8e579](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fa8e579b150770721347a173b4a65b3102d6b347))


### Bug Fixes

* Add LDOptions.application name and versionName. ([#358](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/358)) ([cd75210](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/cd75210d20e3d989897ea42276792d934ac8c9c1))
* Add RN SDK offline support through ConnectionMode. ([#361](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/361)) ([d97ce82](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/d97ce82861438a1b79b93799a9d061cdfa1ab027))
* Adjust identify timeout message. ([#447](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/447)) ([7fc4f2f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/7fc4f2fab7faab4d3b969044e6e9524c59af69d9))
* Bug in sdk-client where withReasons was not passed to streamer. ([#387](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/387)) ([15db92c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/15db92c4bd9657747aa80cd4157cef69bae6aa73))
* Correct documentation for variationDetail for client SDKs. ([#509](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/509)) ([496e39f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/496e39f54a4437866dd1ab4050fd5522cfc78f23))
* Ensure client logger is always wrapped in a safe logger. ([#599](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/599)) ([980e4da](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/980e4daaf32864e18f14b1e5e28e308dff0ae94f))
* Ensure flag-detail-changed is called for deleted flags. ([#695](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/695)) ([6524030](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6524030b41263a584b22211fcbbad10919582f1b))
* Ensure streaming connection is closed on SDK close. ([#774](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/774)) ([f58e746](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/f58e746a089fb0cd5f6169f6c246e1f6515f5047))
* Export LDInspection interface. ([#653](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/653)) ([7f58b2a](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/7f58b2aa947f85c5b3c2462882ccb52a9dbb8ce5))
* Fix field visibility. ([#530](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/530)) ([21fb18b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/21fb18b40139583b44a4185fb689b043547641ab))
* Flag store should not access values from prototype. ([#567](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/567)) ([fca4d92](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fca4d9293746d023a0a122110849bbf335aa3b62))
* Identify incorrectly rejected in client-sdk ([#426](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/426)) ([a019dd6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a019dd66b1b852d888e10b78aec9693d7de195fe))
* Implement anonymous context processing ([#350](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/350)) ([308100d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/308100d095259635bfd8beca8a11aa8b43d7f29a))
* Improvements and fixes from docs review. ([#362](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/362)) ([ba07fbf](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/ba07fbf4ea0b505c4bdc6376b6b36d7a9c1e5fda))
* Minor fixes from docs pr review. ([#363](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/363)) ([4768bf7](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4768bf72a6c7c6f48fb2742fbb75f4c0851275f0))
* Prerequisites should not trigger hooks. ([#628](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/628)) ([70cf3c3](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/70cf3c3cdc507b6df3597ea4954645bb2cc760df))
* Produce a warning when track is called with a non-numeric metric value. ([#449](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/449)) ([6799742](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6799742a7914d32b3313e54408f0a2a3dda3ff5c))
* Remove beta warning for sdk-server. Added tsdoc comments for rn sdk. Added README for sdk-client. ([#334](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/334)) ([bb7c3b4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/bb7c3b45a72d203ad7209def3982d9094fb4cbc9))
* Remove release-as for sdk-client and rn sdk and updated READMEs. ([#337](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/337)) ([52bf088](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/52bf088bd9c7a75f673e37de829459bbad4deb90))
* Send identify event. ([#407](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/407)) ([1d73462](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1d73462914cd35925d34a84b61492a52406b4083))
* Update sdk-client rollup configuration to match common ([#630](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/630)) ([e061811](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e06181158d29824ff0131a88988c84cd4a32f6c0))
* Use flag value whenever provided even if variaiton is null or undefined. ([#581](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/581)) ([d11224c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/d11224c64863c007f4f42f4c48683fd170dd2b32))
* Use flagVersion in analytics events. ([#611](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/611)) ([35fa033](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/35fa0332dc1553c82afd75c9a4770a4833f2dca3))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-sdk-common bumped from 2.18.0 to 3.0.0
</details>

<details><summary>js-sdk-common: 3.0.0</summary>

## [3.0.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/js-sdk-common-v2.18.0...js-sdk-common-v3.0.0) (2025-05-26)


### � BREAKING CHANGES

* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293))

### Features

* Add client-side SDK plugin support. ([#834](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/834)) ([a843a33](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a843a33e97dcab706a0034bd1fd1e3d2f78a9262))
* Add ESM support for common and common-client (rollup) ([#604](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/604)) ([8cd0cdc](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8cd0cdce988f606b1efdf6bfd19484f6607db2e5))
* Add identify timeout to client-sdk. ([#420](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/420)) ([5d73dfe](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/5d73dfeb0d5cdacf620e65e214dd2e334363490e))
* Add platform support for async hashing. ([#573](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/573)) ([9248035](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/9248035a88fba1c7375c5df22ef6b4a80a867983))
* Add support for a cancel-able timeout. ([#476](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/476)) ([24ecf1d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/24ecf1d74b01e1fb32cd250689f17f96d1af1f50))
* Add support for conditional event source capabilities. ([#577](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/577)) ([fe82500](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Add support for Payload Filtering ([#551](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/551)) ([6f44383](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6f4438323baed802d8f951ac82494e6cfa9932c5))
* Add support for per-context summary events. ([#859](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/859)) ([c9fa5c4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c9fa5c45f3ac2cbaad2f2e6312d5231c3f671d98))
* Add URLs for custom events and URL filtering. ([#587](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/587)) ([7131e69](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/7131e6905f19cc10a1374aae5e74cec66c7fd6de))
* Add visibility handling to allow proactive event flushing. ([#607](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/607)) ([819a311](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/819a311db6f56e323bb84c925789ad4bd19ae4ba))
* adds datasource status to sdk-client ([#590](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/590)) ([6f26204](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6f262045b76836e5d2f5ccc2be433094993fcdbb))
* Adds StreamingProcessor for FDv2 to sdk-server package. ([#707](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/707)) ([7f5c275](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/7f5c2750dcc8341d049d7e736ca21ec36e168703))
* Adds support for REPORT. ([#575](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/575)) ([916b724](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/916b72409b63abdf350e70cca41331c4204b6e95))
* Allow specifying the user agent per-sdk implementation. ([#226](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/226)) ([e57716f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e57716f3f6f0ba8568e32b0937903ca46e5470ad))
* Allow using custom user-agent name. ([#580](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/580)) ([ed5a206](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/ed5a206c86f496942664dd73f6f8a7c602a1de28))
* Always inline contexts for feature events ([#351](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/351)) ([961d21b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/961d21bf1fef79f30c267cf30d0bccb4ad3feff6))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/620)) ([3e6d404](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Correct client evaluation typings. ([#554](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/554)) ([64ab88d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/64ab88d278308564b4cd7b6433870c7adb09142a))
* edge sdks should send events to bulk/environment endpoint ([#256](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/256)) ([f45910f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/f45910f171d434ca080bb6486331fbfbd2793985))
* Enhance basic logger destination support. ([#650](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/650)) ([21670c4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/21670c4acd629f7ccfeb7abbe94fe89723533600))
* Environment ID support for hooks ([#823](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/823)) ([63dc9f9](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/63dc9f9f1300c598e79be27909f8195ac66d54ef))
* Implement common client side support for auto environment attributes. ([#356](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/356)) ([8d80259](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8d80259f7379827e46bef8bcf8293e3b2d966d25))
* Implement common support for auto environment attributes. ([#355](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/355)) ([9f562e5](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/9f562e51c60ac5bfff835e7f6724904939710148))
* Implement goals for client-side SDKs. ([#585](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/585)) ([fd38a8f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fd38a8fa8560dad0c6721c2eaeed2f3f5c674900))
* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293)) ([c66aa6e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c66aa6ea0d12e1e4e565cb8378d367c31fab9c1b))
* Option to use gzip to compress event ([#814](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/814)) ([4e91431](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4e914317d31378e2a1eaed5aa03e0ac6beac43d5))
* React-native support for auto-env attributes. ([#357](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/357)) ([deea99c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/deea99ca2fbb3865f2ce55a83b2cf12e0ae2db5e))
* Redact anonymous attributes within feature events ([#352](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/352)) ([8f7ad7e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8f7ad7e7ab0032491d11565a0943a5560c98052f))
* refactors the implementation of context caching.  You can now s& ([#531](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/531)) ([8ab2ee4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8ab2ee425a35350a4f1c50e608c39fa3527da513))
* Support inline context for custom and migration events ([#810](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/810)) ([6aadf04](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6aadf0463968f89bc3df10023267244c2ade1b31))
* Switch to es2017 target to ensure native async/await. ([#231](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/231)) ([a83e4e6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a83e4e62d04c66105a1b0e8893640a7ca2d641e4))


### Bug Fixes

* Add LDOptions.application name and versionName. ([#358](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/358)) ([cd75210](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/cd75210d20e3d989897ea42276792d934ac8c9c1))
* Add RN SDK offline support through ConnectionMode. ([#361](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/361)) ([d97ce82](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/d97ce82861438a1b79b93799a9d061cdfa1ab027))
* Add TimeoutError. ([#428](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/428)) ([aa832db](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/aa832db6172ba727aad9ec478b09a45906e9d5a7))
* Handle missing message with valid string. ([#450](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/450)) ([6ff8982](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6ff8982d5a68f1fff4b8fcafc3eb015a75d3f002))
* Identify incorrectly rejected in client-sdk ([#426](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/426)) ([a019dd6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a019dd66b1b852d888e10b78aec9693d7de195fe))
* Implement anonymous context processing ([#350](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/350)) ([308100d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/308100d095259635bfd8beca8a11aa8b43d7f29a))
* Multi-kind context containing only 1 kind conveted incorrectly. ([#594](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/594)) ([b6ff2a6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/b6ff2a67db9f9a24da4a45ad88fa7f2a22fb635d))
* Produce a warning when track is called with a non-numeric metric value. ([#449](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/449)) ([6799742](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6799742a7914d32b3313e54408f0a2a3dda3ff5c))
* Remove outdated reference to geolocation. ([#719](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/719)) ([0eeb3b6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/0eeb3b6472419d257bf52c4ab3ae33864eae1902))
* remove type modifiers on imports for better TS compatibility ([#346](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/346)) ([3506349](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3506349512f2288ba9bc2b2bd79d6ed38fd3684c))
* RN streamer connection in background and foreground. ([#360](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/360)) ([c69b768](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c69b7686eed1971288adfbe527b4bf53ba5fe2b7))
* Send identify event. ([#407](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/407)) ([1d73462](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1d73462914cd35925d34a84b61492a52406b4083))
* Treat 413 HTTP status as recoverable for events. ([#348](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/348)) ([4a6d4c3](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4a6d4c3cae25e4993a798d0fd315b51ef607d727))
* Update sdk-client rollup configuration to match common ([#630](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/630)) ([e061811](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e06181158d29824ff0131a88988c84cd4a32f6c0))
</details>

<details><summary>js-server-sdk-common: 3.0.0</summary>

## [3.0.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/js-server-sdk-common-v2.15.2...js-server-sdk-common-v3.0.0) (2025-05-26)


### � BREAKING CHANGES

* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293))

### Features

* Add platform support for async hashing. ([#573](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/573)) ([9248035](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/9248035a88fba1c7375c5df22ef6b4a80a867983))
* Add support for client-side prerequisite events. ([#606](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/606)) ([8c84e01](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8c84e0149a5621c6fcb95f2cfdbd6112f3540191))
* Add support for conditional event source capabilities. ([#577](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/577)) ([fe82500](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Add support for getting the logger from server-side SDKs. ([#684](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/684)) ([1c411a1](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1c411a15e308520dc7a0f20af76045f84d53e8a4))
* Add support for optional timeout for waitForInitialization. ([#437](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/437)) ([c6032b3](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c6032b3dd80421ff42aefd729442d18cd27b16e4))
* Add support for Payload Filtering ([#551](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/551)) ([6f44383](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6f4438323baed802d8f951ac82494e6cfa9932c5))
* adds datasource status to sdk-client ([#590](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/590)) ([6f26204](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6f262045b76836e5d2f5ccc2be433094993fcdbb))
* Adds StreamingProcessor for FDv2 to sdk-server package. ([#707](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/707)) ([7f5c275](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/7f5c2750dcc8341d049d7e736ca21ec36e168703))
* Allow specifying the user agent per-sdk implementation. ([#226](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/226)) ([e57716f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e57716f3f6f0ba8568e32b0937903ca46e5470ad))
* Allow using custom user-agent name. ([#580](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/580)) ([ed5a206](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/ed5a206c86f496942664dd73f6f8a7c602a1de28))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/620)) ([3e6d404](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Correct client evaluation typings. ([#554](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/554)) ([64ab88d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/64ab88d278308564b4cd7b6433870c7adb09142a))
* edge sdks should send events to bulk/environment endpoint ([#256](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/256)) ([f45910f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/f45910f171d434ca080bb6486331fbfbd2793985))
* Environment ID support for hooks ([#823](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/823)) ([63dc9f9](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/63dc9f9f1300c598e79be27909f8195ac66d54ef))
* Export internalServer module for internal LD usage ([#804](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/804)) ([ec43ac8](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/ec43ac8af03c778d8d0ac2bd6213f9d54bf011ac))
* Implement common client side support for auto environment attributes. ([#356](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/356)) ([8d80259](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8d80259f7379827e46bef8bcf8293e3b2d966d25))
* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293)) ([c66aa6e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c66aa6ea0d12e1e4e565cb8378d367c31fab9c1b))
* Implement support for hooks. ([#400](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/400)) ([14cb044](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/14cb044f7da5253d268ed37ceeac28f00d4626a5))
* Optimize segment lookup for large segments. ([#235](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/235)) ([ac575d0](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/ac575d011d64f1833fc4c61bbbb7e4542b42e568))
* Option to use gzip to compress event ([#814](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/814)) ([4e91431](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4e914317d31378e2a1eaed5aa03e0ac6beac43d5))
* React-native support for auto-env attributes. ([#357](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/357)) ([deea99c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/deea99ca2fbb3865f2ce55a83b2cf12e0ae2db5e))
* Support inline context for custom and migration events ([#810](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/810)) ([6aadf04](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6aadf0463968f89bc3df10023267244c2ade1b31))
* Switch to es2017 target to ensure native async/await. ([#231](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/231)) ([a83e4e6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a83e4e62d04c66105a1b0e8893640a7ca2d641e4))
* Use callbacks for evaluation hotpath. ([#234](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/234)) ([27e5454](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/27e54543f70e554eb452616f44ed19fbd9086bd2))


### Bug Fixes

* Add LDOptions.application name and versionName. ([#358](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/358)) ([cd75210](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/cd75210d20e3d989897ea42276792d934ac8c9c1))
* Allow for negation of segment match clauses. ([#237](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/237)) ([d8e469a](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/d8e469a5e58b90c791fbbee80f7c0fc447c4e42f))
* Better handle waiting for initialization for failure cases. ([#314](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/314)) ([16515df](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/16515df8526a0c1b884987294eaca848c38f7388)), closes [#312](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/312)
* Cleanup timeout timer for waitForInitialization ([#478](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/478)) ([fccbfac](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fccbfaccb88c7a66f86a2981b74445c894618a06))
* Client cannot become un-initialized. ([#251](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/251)) ([e2e8971](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e2e8971fc1945a1121649ca84b752eb5d819aedd))
* Correct comparison for typeof check. ([#308](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/308)) ([568f2ab](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/568f2ab04d308da53b8a53bb6157a9ccd80c0b08))
* Correct double callback in persistent store wrapper. ([#240](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/240)) ([243729d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/243729d258b81f71f88328fa0d406f3d5f3f1f80))
* corrected location of payloadFilterKey in LDOptions ([#863](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/863)) ([cc825d4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/cc825d499b00a46cc887c1804088fbf4cdf082a0))
* Correctly handle null values in JSON variations. ([#569](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/569)) ([907d08b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/907d08b730ce9745c1b221f2f539f7c56c3a0234)), closes [#568](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/568)
* Dispatch change events after ready event. ([#252](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/252)) ([2e2a865](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/2e2a8653671b7e7c814446ccb7ba696e301e81bb))
* Ensure that test data user targets are handled correctly. ([#223](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/223)) ([8a423b2](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8a423b22282624627200dfda1ebe4207f9db69a6))
* Export migration APIs. ([#302](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/302)) ([1aaaec7](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1aaaec772f6e2f01156241ba2dbad1fd578511d5))
* Fix an error handling situation that could cause double evaluation. ([#249](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/249)) ([2c613ff](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/2c613ffc8c6eea6e64495c63ec9dc079d1da619e))
* Fix cancelling timeout when waitForInitialization throws an exception ([#808](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/808)) ([bb3c950](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/bb3c95041fc41100b11eb698c7662b2442d46fd1))
* Fix issue where flush callback could be called twice. ([#779](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/779)) ([c377e89](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c377e890f9af71f1658f3303217118206496a602))
* Include prerequisiteKey in migration op event. ([#481](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/481)) ([824f59d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/824f59d256e6316365b32117887a1af2520d8996))
* Increment version for changing flagValues ([#317](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/317)) ([e8e07ef](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e8e07ef66966f1a248fa0da8b8c63b703dfbae99))
* LRU cache memory leak. ([#475](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/475)) ([a5fdefc](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a5fdefcf48f359ab26846edb057eb480bfc3db7e)), closes [#474](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/474)
* Preserve fallthrough variation when cloning test data. ([#194](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/194)) ([e9cf09d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e9cf09d21adb06e2893c6bb369b3c430c7a26a88))
* Produce a warning when track is called with a non-numeric metric value. ([#449](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/449)) ([6799742](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6799742a7914d32b3313e54408f0a2a3dda3ff5c))
* Remove beta warning for sdk-server. Added tsdoc comments for rn sdk. Added README for sdk-client. ([#334](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/334)) ([bb7c3b4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/bb7c3b45a72d203ad7209def3982d9094fb4cbc9))
* Set the content type when posting events. ([#184](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/184)) ([dc9e921](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/dc9e921ce359f9e22e645c2a3696e2dd1a963635))
* Use clientSideAvailability instead of clientSide for filtering client side flags. ([#270](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/270)) ([2702342](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/27023429d36986466cda46aa4d95eb01c10cd455))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-sdk-common bumped from 2.18.0 to 3.0.0
</details>

<details><summary>js-server-sdk-common-edge: 3.0.0</summary>

## [3.0.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/js-server-sdk-common-edge-v2.6.6...js-server-sdk-common-edge-v3.0.0) (2025-05-26)


### � BREAKING CHANGES

* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293))

### Features

* Add support for conditional event source capabilities. ([#577](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/577)) ([fe82500](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Add support for optional timeout for waitForInitialization. ([#437](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/437)) ([c6032b3](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c6032b3dd80421ff42aefd729442d18cd27b16e4))
* Add TTL caching for data store ([#801](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/801)) ([c1de485](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c1de4850c81dff8ad52276c2bfc2a2aeb87bd2d9))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/620)) ([3e6d404](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* edge sdks should send events to bulk/environment endpoint ([#256](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/256)) ([f45910f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/f45910f171d434ca080bb6486331fbfbd2793985))
* Implement common client side support for auto environment attributes. ([#356](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/356)) ([8d80259](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8d80259f7379827e46bef8bcf8293e3b2d966d25))
* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293)) ([c66aa6e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c66aa6ea0d12e1e4e565cb8378d367c31fab9c1b))
* React-native support for auto-env attributes. ([#357](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/357)) ([deea99c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/deea99ca2fbb3865f2ce55a83b2cf12e0ae2db5e))
* Switch to es2017 target to ensure native async/await. ([#231](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/231)) ([a83e4e6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a83e4e62d04c66105a1b0e8893640a7ca2d641e4))


### Bug Fixes

* Log errors when there is no error event handler. ([#495](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/495)) ([6b73699](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6b73699061efa46cd291756d3932fcf78d480f40))
* Remove logging of SDK option configurations ([#806](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/806)) ([a76d196](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a76d19690a7ef5932c36bfc974affc0a192c2d4f))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.15.2 to 3.0.0
</details>

<details><summary>node-server-sdk: 10.0.0</summary>

## [10.0.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/node-server-sdk-v9.9.2...node-server-sdk-v10.0.0) (2025-05-26)


### � BREAKING CHANGES

* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293))

### Features

* Add support for conditional event source capabilities. ([#577](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/577)) ([fe82500](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Add support for optional timeout for waitForInitialization. ([#437](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/437)) ([c6032b3](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c6032b3dd80421ff42aefd729442d18cd27b16e4))
* Add wrapper support. ([#526](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/526)) ([29a43a4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/29a43a4b5243e16d2f746340d4d50467e0875980))
* Allow specifying the user agent per-sdk implementation. ([#226](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/226)) ([e57716f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e57716f3f6f0ba8568e32b0937903ca46e5470ad))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/620)) ([3e6d404](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Environment ID support for hooks ([#823](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/823)) ([63dc9f9](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/63dc9f9f1300c598e79be27909f8195ac66d54ef))
* Implement handling for gzip compressed responses. ([#367](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/367)) ([a52bee1](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a52bee19b909b210b4957d46a300777de0e27ada))
* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293)) ([c66aa6e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c66aa6ea0d12e1e4e565cb8378d367c31fab9c1b))
* Node server SDK major release. ([#180](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/180)) ([2e02f72](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/2e02f72ec43e86fb203d32742b78a8e4a905a114))
* Option to use gzip to compress event ([#814](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/814)) ([4e91431](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4e914317d31378e2a1eaed5aa03e0ac6beac43d5))
* React-native support for auto-env attributes. ([#357](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/357)) ([deea99c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/deea99ca2fbb3865f2ce55a83b2cf12e0ae2db5e))
* Switch to es2017 target to ensure native async/await. ([#231](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/231)) ([a83e4e6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a83e4e62d04c66105a1b0e8893640a7ca2d641e4))
* Update to launchdarkly-eventsource 2.0.0. ([#199](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/199)) ([5b7bac9](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/5b7bac9d864d7e7e5204131eae7612fc982e941e))


### Bug Fixes

* Configure max backoff and jitter ratio to ensure exponential backoff. ([#463](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/463)) ([050007d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/050007d8153ecd67633a05761e9ea3b27e15b0ca))
* Fix an issue where failed http requests could cause an unhandled promise rejection. ([#371](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/371)) ([dd6d0e7](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/dd6d0e7431786e15d6f086f5a667f315cf1094a2))
* Fix incompatibility with @types/node release. ([#646](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/646)) ([2a9a0de](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/2a9a0de44c98ebb80dc8391f109e9bbf5c83540b))
* Fix typo in proxy-authorization header for basic authentication. ([#720](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/720)) ([220b6d6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/220b6d6d34331d271ca30f0cae363c734fcc38bf)), closes [#718](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/718)
* Log errors when there is no error event handler. ([#495](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/495)) ([6b73699](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6b73699061efa46cd291756d3932fcf78d480f40))
* move "default" conditional exports to be last ([#190](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/190)) ([49ca1a1](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/49ca1a1d47595b2c3ef449054ba6d76a8685a590))
* Update event source to better log unexpected disconnects. ([#451](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/451)) ([0c83afd](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/0c83afd5f539ecce09f4f5723bc01e5584cc268d))
* Update launchdarkly-eventsource to 2.0.3. ([#468](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/468)) ([c0f934d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c0f934db6066f4767e2f52b332adf4a3c2837e40)), closes [#458](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/458)


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.15.2 to 3.0.0
</details>

<details><summary>node-server-sdk-dynamodb: 7.0.0</summary>

## [7.0.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/node-server-sdk-dynamodb-v6.2.11...node-server-sdk-dynamodb-v7.0.0) (2025-05-26)


### � BREAKING CHANGES

* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293))

### Features

* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/620)) ([3e6d404](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293)) ([c66aa6e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c66aa6ea0d12e1e4e565cb8378d367c31fab9c1b))
* Node server SDK major release. ([#180](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/180)) ([2e02f72](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/2e02f72ec43e86fb203d32742b78a8e4a905a114))
* React-native support for auto-env attributes. ([#357](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/357)) ([deea99c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/deea99ca2fbb3865f2ce55a83b2cf12e0ae2db5e))
* Switch to es2017 target to ensure native async/await. ([#231](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/231)) ([a83e4e6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a83e4e62d04c66105a1b0e8893640a7ca2d641e4))


### Bug Fixes

* Correct store/telemetry peer deps. ([#439](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/439)) ([b963554](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/b9635541ee0a31094063075faae942698f2e8180))
* Fix peer dependency version for node store integrations. ([#186](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/186)) ([1e7548b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1e7548b01da4937a72b3d40264ab0238fd835b8b))
* Fix typings for big segment store factories. ([#413](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/413)) ([723804b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/723804bb7db19f485d84940715c69e34cc08062f))
* Include prerequisiteKey in migration op event. ([#481](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/481)) ([824f59d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/824f59d256e6316365b32117887a1af2520d8996))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/node-server-sdk bumped from 9.9.2 to 10.0.0
  * peerDependencies
    * @launchdarkly/node-server-sdk bumped from >=9.4.3 to >=10.0.0
</details>

<details><summary>node-server-sdk-otel: 1.3.0</summary>

## [1.3.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/node-server-sdk-otel-v1.2.2...node-server-sdk-otel-v1.3.0) (2025-05-26)


### Features

* Add OpenTelemetry support for node-server-sdk. ([#401](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/401)) ([daf4939](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/daf4939fdd53c9fe791e828783f809382673d9a5))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/620)) ([3e6d404](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Environment ID support for hooks ([#823](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/823)) ([63dc9f9](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/63dc9f9f1300c598e79be27909f8195ac66d54ef))


### Bug Fixes

* Correct store/telemetry peer deps. ([#439](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/439)) ([b963554](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/b9635541ee0a31094063075faae942698f2e8180))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/node-server-sdk bumped from 9.9.2 to 10.0.0
  * peerDependencies
    * @launchdarkly/node-server-sdk bumped from >=9.4.3 to >=10.0.0
</details>

<details><summary>node-server-sdk-redis: 5.0.0</summary>

## [5.0.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/node-server-sdk-redis-v4.2.11...node-server-sdk-redis-v5.0.0) (2025-05-26)


### � BREAKING CHANGES

* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293))

### Features

* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/620)) ([3e6d404](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* Implement Migrations. Refactor for client SDKs. ([#293](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/293)) ([c66aa6e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c66aa6ea0d12e1e4e565cb8378d367c31fab9c1b))
* Node server SDK major release. ([#180](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/180)) ([2e02f72](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/2e02f72ec43e86fb203d32742b78a8e4a905a114))
* React-native support for auto-env attributes. ([#357](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/357)) ([deea99c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/deea99ca2fbb3865f2ce55a83b2cf12e0ae2db5e))
* Switch to es2017 target to ensure native async/await. ([#231](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/231)) ([a83e4e6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a83e4e62d04c66105a1b0e8893640a7ca2d641e4))


### Bug Fixes

* Correct store/telemetry peer deps. ([#439](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/439)) ([b963554](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/b9635541ee0a31094063075faae942698f2e8180))
* Fix peer dependency version for node store integrations. ([#186](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/186)) ([1e7548b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1e7548b01da4937a72b3d40264ab0238fd835b8b))
* Fix typings for big segment store factories. ([#413](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/413)) ([723804b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/723804bb7db19f485d84940715c69e34cc08062f))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/node-server-sdk bumped from 9.9.2 to 10.0.0
  * peerDependencies
    * @launchdarkly/node-server-sdk bumped from >=9.4.3 to >=10.0.0
</details>

<details><summary>react-native-client-sdk: 10.11.0</summary>

## [10.11.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/react-native-client-sdk-v10.10.2...react-native-client-sdk-v10.11.0) (2025-05-26)


### Features

* Add client-side SDK plugin support. ([#834](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/834)) ([a843a33](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a843a33e97dcab706a0034bd1fd1e3d2f78a9262))
* Add configuration validation for ReactNative specific configuration. ([#532](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/532)) ([c1490e2](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c1490e22d0b3fb4d7df878aabab0ea24db502fb6))
* Add connection mananger. ([#522](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/522)) ([5bf8b16](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/5bf8b16e26e7d8cbbd18524f1c13f773de457b82))
* Add identify timeout to client-sdk. ([#420](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/420)) ([5d73dfe](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/5d73dfeb0d5cdacf620e65e214dd2e334363490e))
* Add support for conditional event source capabilities. ([#577](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/577)) ([fe82500](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fe82500f28cf8d8311502098aa6cc2e73932064e))
* Add support for hooks. ([#605](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/605)) ([04d347b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/04d347b25e01015134a2545be22bfd8b1d1e85cc))
* Add support for inspectors. ([#625](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/625)) ([a986478](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a986478ed8e39d0f529ca6adec0a09b484421390))
* Added react-universal code. ([#493](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/493)) ([e1d2d30](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e1d2d3061246421e9931d4ec271d477fcbede265))
* adds ping stream support ([#624](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/624)) ([dee53af](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/dee53af9312b74a70b748d49b2d2911d65333cf3))
* Adds support for REPORT. ([#575](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/575)) ([916b724](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/916b72409b63abdf350e70cca41331c4204b6e95))
* Apply private property naming standard. Mangle browser private properties. ([#620](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/620)) ([3e6d404](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3e6d404ae665c5cc7e5a1394a59c8f2c9d5d682a))
* custom storage option for React Native SDK ([#539](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/539)) ([115bd82](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/115bd828c665731084665b5d94bb3836942332b1))
* Implement polling support. ([#524](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/524)) ([a99048e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a99048e0cebaafd536f79114c4727524b8f7357d))
* React Native SDK major release. ([#369](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/369)) ([1d5ca40](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1d5ca40888c4db4bb938884ca55732750fb10614))
* React-native support for auto-env attributes. ([#357](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/357)) ([deea99c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/deea99ca2fbb3865f2ce55a83b2cf12e0ae2db5e))
* Refactor application state handling. ([#523](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/523)) ([f5b81e6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/f5b81e6fc571dc9d97a18d07f382c77cd938fd65))
* Refactor data source connection handling. ([#591](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/591)) ([53f5bb8](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/53f5bb89754ff05405d481a959e75742fbd0d0a9))
* Remove event target shim. ([#545](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/545)) ([448ad67](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/448ad67815b9ec29abd322ed8483b2367147b146)), closes [#412](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/412)
* Update expo and RN version used in example. ([#520](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/520)) ([b8384c4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/b8384c41243fb7475439cc634459b5156e05791b))


### Bug Fixes

* Add Detox e2e tests. ([#340](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/340)) ([e7b9d29](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e7b9d299fe1e1c34489f8688099de466a12a3622))
* Add more rn sdk unit tests. ([#339](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/339)) ([913bc00](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/913bc0009a39188b6b9785e5c4b4b79078061821))
* Add RN SDK offline support through ConnectionMode. ([#361](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/361)) ([d97ce82](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/d97ce82861438a1b79b93799a9d061cdfa1ab027))
* Added iOS SettingsManager null check. ([#471](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/471)) ([8ff641b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8ff641be8b32f24884457bd506566e283cf04e40))
* Babel TypeError due to event-target-shim ([#365](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/365)) ([c1c0086](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c1c008610f36c8dd0c1e3da3cf9450c64d41874f))
* Client SDKs should use wrapper information. ([#836](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/836)) ([1e0cf6a](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1e0cf6a0f77f8cfe6a7a0e675fc6490ea52a5b07))
* Ensure client logger is always wrapped in a safe logger. ([#599](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/599)) ([980e4da](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/980e4daaf32864e18f14b1e5e28e308dff0ae94f))
* Ensure streaming connection is closed on SDK close. ([#774](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/774)) ([f58e746](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/f58e746a089fb0cd5f6169f6c246e1f6515f5047))
* Fix base64 encoding of unicode characters. ([#613](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/613)) ([35ec8d1](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/35ec8d1ecc07ddb68f4d02b19e1f238f7ff14df7))
* Fix Detox e2e tests broken after 0.73 update. ([#366](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/366)) ([6349b98](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/6349b98e70554d8240f0e8d6b1090e4c37bde6eb))
* Fix field visibility. ([#530](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/530)) ([21fb18b](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/21fb18b40139583b44a4185fb689b043547641ab))
* Guard against null auto env attributes and async-storage. ([#384](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/384)) ([14ce392](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/14ce392ade486fa8168d2dae8375e4c201912f83))
* Handle non-status code errors for streaming connection. ([#533](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/533)) ([fc4645e](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/fc4645eb7d70425e7ea615e275e5ad1e488365d4))
* Implement RN SDK EventSource jitter backoff. ([#359](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/359)) ([95e58bd](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/95e58bd666772b30b31ac98a462ca19407bc2bac))
* Improvements and fixes from docs review. ([#362](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/362)) ([ba07fbf](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/ba07fbf4ea0b505c4bdc6376b6b36d7a9c1e5fda))
* Make it more clear what is happening when an event source is connecting. ([#518](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/518)) ([52055ba](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/52055ba603349c6a2d94e25c58813765d4d9abd9))
* **react-native:** check for nullability in SettingsManager?.settings ([#758](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/758)) ([3449934](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/3449934027697ac9283aeeeca8df9a76d172fcad))
* Remove beta warning for sdk-server. Added tsdoc comments for rn sdk. Added README for sdk-client. ([#334](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/334)) ([bb7c3b4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/bb7c3b45a72d203ad7209def3982d9094fb4cbc9))
* Remove release-as for sdk-client and rn sdk and updated READMEs. ([#337](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/337)) ([52bf088](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/52bf088bd9c7a75f673e37de829459bbad4deb90))
* Requestor initialized with wrong withReasons and useReport config ([#869](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/869)) ([2e095c5](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/2e095c5cc5790dd554d63745a5ebcbfb0f44139a))
* RN streamer connection in background and foreground. ([#360](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/360)) ([c69b768](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c69b7686eed1971288adfbe527b4bf53ba5fe2b7))
* Stream retry failure due to previous open connection. ([#409](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/409)) ([ae08e08](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/ae08e08470d954a683940c4263f3274ac73c4206))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-client-sdk-common bumped from 1.14.0 to 2.0.0
</details>

<details><summary>server-sdk-ai: 0.10.0</summary>

## [0.10.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/server-sdk-ai-v0.9.8...server-sdk-ai-v0.10.0) (2025-05-26)


### � BREAKING CHANGES

* Change versionKey to variationKey. ([#709](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/709))
* Rename model and providerid to name. ([#706](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/706))
* Updated AI config interface. ([#697](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/697))

### Features

* Add AI SDK for Server-Side JavaScript. ([#619](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/619)) ([18e8c4c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/18e8c4c9c2189e7629e1e1eb995d85d857c4ae4f))
* Add getSummary method to the tracker. ([#698](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/698)) ([4df902d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4df902d98584c88b072d6dab5f32a6ea8c4fcdf5))
* Add support for tracking errors. ([#715](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/715)) ([02f1d3d](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/02f1d3daa711319a620a55b50481083980ab18f7))
* add support for versioned metrics for AI Configs ([#773](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/773)) ([a3f756f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a3f756f3c3207a068115b147d5c7439e204b7ae4))
* Change the typing for the LDAIConfig. ([#688](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/688)) ([1f3f54a](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/1f3f54abef144cccc7ac5b9bfef8392b9d7f2618))
* track timeToFirstToken in LDAIConfigTracker ([#749](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/749)) ([c97674f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/c97674fe521bcfe14dc6e0679bf25e293a2a1ad1))
* Updated AI config interface. ([#697](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/697)) ([cd72ea8](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/cd72ea8193888b0635b5beffa0a877b18294777e))


### Bug Fixes

* Correct documentation for AI config function. ([#754](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/754)) ([0bdb0be](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/0bdb0be6b0e0213c5139af9008884ea74be197b1))
* Do not include _ldMeta in returned config. ([#668](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/668)) ([89ce6db](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/89ce6dbbb2889af66ca53dd546c5977953dea972))
* **docs:** Node.js AI SDK: modelConfig --&gt; config in readme ([#765](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/765)) ([4d46117](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/4d4611700e7eebd9a7d6f8fd596a7a4ff3310802))
* Remove underscore token usage. Improve documentation. ([#667](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/667)) ([5fe36fb](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/5fe36fbd5b7047428204427fe6849d49de6ee952))
* Update default typings to include enabled. ([#680](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/680)) ([978dfa9](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/978dfa95d1c25f942d96b730b187f92af045f90f))


### Code Refactoring

* Change versionKey to variationKey. ([#709](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/709)) ([bfee298](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/bfee29843125c55be1b21e4f77c9d8c3c8698856))
* Rename model and providerid to name. ([#706](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/706)) ([8dd3951](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/8dd39517cfc14c6e037a2438d22f20a9527c9ffa))


### Dependencies

* The following workspace dependencies were updated
  * devDependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.15.2 to 3.0.0
  * peerDependencies
    * @launchdarkly/js-server-sdk-common bumped from 2.x to 3.0.0
</details>

<details><summary>vercel-server-sdk: 1.4.0</summary>

## [1.4.0](https://github.com/nosnibor89/ld-sdk-criss-js-core/compare/vercel-server-sdk-v1.3.30...vercel-server-sdk-v1.4.0) (2025-05-26)


### Features

* Allow specifying the user agent per-sdk implementation. ([#226](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/226)) ([e57716f](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/e57716f3f6f0ba8568e32b0937903ca46e5470ad))
* React-native support for auto-env attributes. ([#357](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/357)) ([deea99c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/deea99ca2fbb3865f2ce55a83b2cf12e0ae2db5e))
* Support analytics events in the vercel SDK. ([#316](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/316)) ([cc41db4](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/cc41db4dedc8be9e7e9cbbc0978928adaa48c2ec))
* Switch to es2017 target to ensure native async/await. ([#231](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/231)) ([a83e4e6](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/a83e4e62d04c66105a1b0e8893640a7ca2d641e4))
* Vercel 1.0.0 ([#177](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/177)) ([78daeaf](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/78daeaf566957075c823600a03f8475bebd4dbdb))


### Bug Fixes

* Update to major version of @vercel/edge-config ([#393](https://github.com/nosnibor89/ld-sdk-criss-js-core/issues/393)) ([bbaf01c](https://github.com/nosnibor89/ld-sdk-criss-js-core/commit/bbaf01cd4afa74e5e2da13ba54799c4f689a3f49))


### Dependencies

* The following workspace dependencies were updated
  * dependencies
    * @launchdarkly/js-server-sdk-common-edge bumped from 2.6.6 to 3.0.0
</details>

---
This PR was generated with [Release Please](https://github.com/googleapis/release-please). See [documentation](https://github.com/googleapis/release-please#release-please).